<script>
import {ref, reactive, computed} from "vue"

export default {
  props: {
    heroes: Array,
    columns: Array,
    filterKey: String
  },
  setup(props) {
    const sortOrders = reactive(Object.fromEntries(props.columns.map((key) => [key, 1])))
    const sortKey = ref('')

    const filterHeroes = (heroes, filterKey) => {
      if (!filterKey) return heroes
      filterKey = filterKey.toLowerCase()
      return heroes.filter((row) =>
        Object.keys(row).some((key) =>
          String(row[key]).toLowerCase().indexOf(filterKey) > -1))
    }

    const sortHeroes = (heroes, sortKey) => {
      if (!sortKey) return heroes
      const order = sortOrders[sortKey]
      return heroes.slice().sort((a, b) => {
        a = a[sortKey]
        b = b[sortKey]
        return (a === b ? 0 : a > b ? 1 : -1) * order
      })
    }
    const filteredHeroes = computed(() => sortHeroes(filterHeroes(props.heroes, props.filterKey), sortKey.value))
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
    const sortBy = (key) => {
      sortKey.value = key
      sortOrders[key] = sortOrders[key] * -1
    }
    return {
      sortOrders,
      sortKey,
      filteredHeroes,
      capitalize,
      sortBy
    }
  }
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="key in columns" @click="sortBy(key)" :class="{active: sortKey == key}">
          {{capitalize(key)}}
          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredHeroes">
        <td v-for="key in columns">{{entry[key]}}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
