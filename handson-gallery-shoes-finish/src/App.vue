<script setup>
import { ref } from "vue";
const shoesData = ref([]);
const load = async () => {
  const response = await fetch("/json/shoes.json");
  shoesData.value = await response.json();
};
load();
const priceFormat = (num) => {
  return num.toLocaleString();
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#Browser_compatibility
};
</script>

<template>
  <div class="card-wrapper">
    <div v-for="(item, index) in shoesData.shoes" :key="index" class="card">
      <img
        class="thumbnail"
        :src="'/img/items/' + item.photoFileName"
        :alt="item.name"
      />
      <div class="item-info">
        <div class="item-title">{{ item.name }}</div>
        <div class="item-description">{{ item.description }}</div>
        <div class="item-price">&yen;{{ priceFormat(item.price) }}</div>
      </div>
    </div>
  </div>
</template>

<style>
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.card {
  border: 1px solid #ccc;
  width: 300px;
}
.thumbnail {
  width: 100%;
}
.item-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.item-description {
  font-size: small;
  margin-bottom: 0.5rem;
}
.item-info {
  padding: 1rem;
}
.item-price {
  font-weight: bold;
  color: orange;
}
</style>
