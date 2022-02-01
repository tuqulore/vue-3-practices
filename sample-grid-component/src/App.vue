<script>
import {ref} from "vue"
import DemoGrid from "./components/DemoGrid.vue"

export default {
  components: {
    DemoGrid
  },
  setup() {
    const searchQuery = ref('')
    const gridColumns = ref(['name', 'power'])
    const gridData = ref([
      {name: 'Chuck Norris', power: Infinity},
      {name: 'Bruce Lee', power: 9000},
      {name: 'Jackie Chan', power: 7000},
      {name: 'Jet Li', power: 8000}
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
    Search
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
