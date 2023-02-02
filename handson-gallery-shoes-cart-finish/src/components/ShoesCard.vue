<template>
  <div class="card">
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
    <button @click="addCart">カートに追加</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  shoesData: Object,
});
const emits = defineEmits(["added-cart"]);
const item = ref(props.shoesData);
const priceFormat = (num) => {
  return num.toLocaleString();
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#Browser_compatibility
};
const addCart = () => {
  emits("added-cart", item);
};
</script>

<style scoped>
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
