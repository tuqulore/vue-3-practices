<template>
  <div class="shopping-cart__container">
    <div class="shopping-items">
      <div v-for="(item, index) in items" :key="index" class="shopping-item">
        <img
          class="thumbnail"
          :src="'/img/items/' + item.photoFileName"
          :alt="item.name"
        />
        <div class="item-info">
          <div class="item-title">{{ item.name }}</div>
          <div class="item-price">&yen;{{ priceFormat(item.price) }}</div>
        </div>
        <button @click="removeItem(index)">カートから削除</button>
      </div>
    </div>
    <div class="price">
      <div>消費税 &yen;{{ priceFormat(tax) }}</div>
      <div class="total-price">
        税込み合計 &yen; {{ priceFormat(totalPrice) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { ref } from "vue";
const props = defineProps({ items: { type: Array, required: true } });
const items = ref(props.items);
const priceFormat = (num) => {
  return num.toLocaleString();
};
const removeItem = (itemId) => {
  items.value.splice(itemId, 1);
};
const subTotal = computed(() => {
  //小計を出す
  return items.value.reduce((sum, element) => sum + element.price, 0);
});
const tax = computed(() => {
  // 小計から消費税額を算出して返す
  return Math.floor(subTotal.value * 0.1);
});
const totalPrice = computed(() => {
  // 合計金額を返す
  return subTotal.value + tax.value;
});
</script>

<style scoped>
.shopping-cart__container {
  border-bottom: 1px solid #ccc;
  padding: 1rem;
  position: fixed;
  background-color: #fff;
  max-height: 50vh;
  width: 100vw;
  overflow-y: auto;
  right: 0;
  top: 70px;
  z-index: 3;
  box-sizing: border-box;
}
.shopping-items {
  margin-bottom: 1rem;
}
.shopping-item {
  display: flex;
  gap: 12px;
  align-items: center;
}
.thumbnail {
  width: 60px;
}
.item-info {
  display: flex;
  gap: 12px;
}
.item-title {
  font-weight: bold;
}
.item-price {
  color: orange;
  font-weight: bold;
}
.total-price {
  font-weight: bold;
  margin-top: 0.5rem;
  font-size: 1.2rem;
}
</style>
