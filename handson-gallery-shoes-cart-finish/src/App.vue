<script setup>
import { ref } from "vue";
import ShoesCard from "./components/ShoesCard.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import CartIcon from "./components/CartIcon.vue";

const shoesData = ref([]);
const cart = ref([]);
const showCart = ref(false);
const addCart = (item) => {
  cart.value.push(item.value);
};
const load = async () => {
  const response = await fetch("/json/shoes.json");
  shoesData.value = await response.json();
};
load();
</script>

<template>
  <header class="shopping-header">
    <h1>ショッピング</h1>
    <button @click="showCart = !showCart"><CartIcon />{{ cart.length }}</button>
  </header>
  <ShoppingCart v-if="showCart" :items="cart" />
  <div class="card-wrapper">
    <ShoesCard
      v-for="item in shoesData.shoes"
      :key="item.id"
      :shoes-data="item"
      @added-cart="addCart"
    />
  </div>
</template>

<style scoped>
.shopping-header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  position: fixed;
  background-color: white;
  border-bottom: 1px solid #ccc;
  padding: 0 1rem;
  z-index: 2;
  box-sizing: border-box;
  top: 0;
  left: 0;
}
.shopping-header h1 {
  font-size: 1.4rem;
  margin: 0;
}
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  position: relative;
  top: 80px;
}
</style>
