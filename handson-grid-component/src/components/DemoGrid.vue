<script setup>
import { ref, reactive, computed } from "vue";

const props = defineProps({
  // Appコンポーネントから渡されるプロパティはこの箇所のプロパティの定義と対応しています
  heroes: { type: Array, required: true },
  columns: { type: Array, required: true },
  filterKey: { type: String, required: true },
});
// カラムごとに並べ替えの降順昇順を判定するための配列を作成しています
const sortOrders = reactive(
  Object.fromEntries(props.columns.map((column) => [column, 1])),
);
// 並べ替え対象のカラムを指定するためのリアクティブな値の参照を作成しています
const sortKey = ref("");

// ヒーローを絞り込みする関数を定義しています
const filterHeroes = (heroes, filterKey) => {
  if (!filterKey) return heroes;
  // 絞り込みする文字列を正規化しています
  filterKey = filterKey.normalize();
  // 条件をパスする要素で配列をフィルタリングします
  return heroes.filter((row) =>
    // 行ごとの列名で絞り込みの走査をします
    Object.keys(row).some(
      (column) =>
        // 行[列]の値に対して絞り込みする文字列で検索しています
        String(row[column]).normalize().indexOf(filterKey) > -1,
    ),
  );
};

// ヒーローを並べ替えする関数を定義しています
const sortHeroes = (heroes, sortKey) => {
  if (!sortKey) return heroes;
  const order = sortOrders[sortKey];
  // 並べ替えた新しい配列を返しています
  return heroes.slice().sort((a, b) => {
    a = a[sortKey];
    b = b[sortKey];
    return (a === b ? 0 : a > b ? 1 : -1) * order;
  });
};

// ヒーローを絞り込みしたのち並べ替えした算出プロパティを作成しています
const filteredHeroes = computed(() =>
  sortHeroes(filterHeroes(props.heroes, props.filterKey), sortKey.value),
);
// テーブルヘッダのClickイベントのハンドリング(並べ替え対象のカラムを更新し並び替えの降順昇順を判定する値を符号反転する)関数を定義しています
const sortBy = (column) => {
  sortKey.value = column;
  sortOrders[column] = sortOrders[column] * -1;
};
</script>

<template>
  <table>
    <thead>
      <tr>
        <!-- リストレンダリングによってテーブルヘッダ、テーブルボディの要素を列挙しています -->
        <!-- クラスバインディングによって並べ替え対象のカラム(列)がアクティブ(活性)である見た目を動的に反映しています -->
        <th
          v-for="(column, index) in columns"
          :key="index"
          :class="{ active: sortKey == column }"
          @click="sortBy(column)"
        >
          {{ column }}
          <span
            class="arrow"
            :class="sortOrders[column] > 0 ? 'asc' : 'dsc'"
          ></span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in filteredHeroes" :key="rowIndex">
        <td v-for="(column, columnIndex) in columns" :key="columnIndex">
          {{ row[column] }}
        </td>
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
