<script>
import {ref} from "vue"
import DemoGrid from "./components/DemoGrid.vue"

export default {
  components: {
    DemoGrid
  },
  setup() {
    const searchQuery = ref('')
    const gridColumns = ref(['名前', '戦闘力'])
    const gridData = ref([
      {名前: 'チャック・ノリス', 戦闘力: Infinity},
      {名前: 'ブルース・リー', 戦闘力: 9000},
      {名前: 'ジャッキー・チェン', 戦闘力: 7000},
      {名前: 'ジェット・リー', 戦闘力: 8000}
    ])
    return {
      searchQuery,
      gridColumns,
      gridData
    }
  }
}
</script>

<template>
  <form id="search">
    検索
    <input name="query" v-model="searchQuery" />
  </form>
  <DemoGrid :heroes="gridData" :columns="gridColumns" :filter-key="searchQuery" />
</template>

<style>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}
</style>
