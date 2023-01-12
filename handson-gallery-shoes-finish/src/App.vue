<script setup>
import { ref, onMounted } from "vue";
const shoes = ref([]);
onMounted(async () => {
  const shoesJson = await fetch("/json/shoes.json");
  shoes.value = await shoesJson.json();
});
const priceFormat = (num) => {
  return num.toLocaleString();
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#Browser_compatibility
};
</script>

<template>
  <div class="card-wrapper">
    <div class="card" v-for="item in shoes.shoes">
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
