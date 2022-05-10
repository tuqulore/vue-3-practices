<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const shoes = ref([]);
    onMounted(async () => {
      // DOM要素がマウントされたあとにJSONデータを読み込んでください
      const shoesJson = await fetch("/json/shoes.json");
      shoes.value = await shoesJson.json();
    });
    const priceFormat = (num) => {
      // 値段表記を「1000」から「1,000」になるようにメソッドを記述してください
      return num;
      // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#Browser_compatibility
    };
    return { shoes, priceFormat };
  },
};
</script>

<template>
  <p>商品リストを完成させてください</p>
  <div class="card-wrapper">
    <div class="card" v-for="item in shoes.shoes">
      <img
        class="thumbnail"
        :src="'/img/items/'"
        alt="alt属性にtitleを挿入してください"
      />
      <div class="item-info">
        <div class="item-title">ここにitemを表示してください</div>
        <div class="item-description">ここにdesctiptionを表示してください</div>
        <div class="item-price">
          &yen; ここにpriceFormatメソッドを通したpriceを表示してください
        </div>
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
