<script setup>
// composablesを呼び出す
const stickies = useStickies();

// 付箋を追加するボタンが押された
const addSticky = () => {
  stickies.add();
};
</script>

<template>
  <div>
    <h1>Sub page</h1>
    <p>ここはサブページです</p>
    <Sticky v-for="sticky in stickies.data" :data="sticky" />
    <button @click="addSticky">付箋を追加する</button>
    <NuxtLink to="/">home</NuxtLink>
  </div>
</template>
