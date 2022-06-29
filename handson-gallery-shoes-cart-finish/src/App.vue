<script>
import { ref, onMounted } from "vue";
import ShoesCard from "./components/ShoesCard.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import CartIcon from "./components/CartIcon.vue";

export default {
  setup() {
    const shoes = ref([]);
    const cart = ref([]);
    const showCart = ref(false);
    const addCart = (item) => {
      cart.value.push(item.value);
    };
    onMounted(async () => {
      const shoesJson = await fetch("/json/shoes.json");
      shoes.value = await shoesJson.json();
    });
    return { shoes, addCart, cart, showCart };
  },
  components: { ShoesCard, ShoppingCart, CartIcon },
};
</script>

<template>
  <header class="shopping-header">
    <h1>ショッピング</h1>
    <button @click="showCart = !showCart"><CartIcon />{{ cart.length }}</button>
  </header>
  <ShoppingCart v-if="showCart" :_items="cart" />
  <div class="card-wrapper">
    <ShoesCard
      v-for="item in shoes.shoes"
      :shoesData="item"
      @added-cart="addCart"
      :key="item.id"
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
