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
    <h1>Top page</h1>
    <p v-for="(sticky, index) in stickies.data" :key="index">{{ sticky }}</p>
    <StickyNote
      v-for="(sticky, index) in stickies.data"
      :key="index"
      :data="sticky"
    />
    <button @click="addSticky">付箋を追加する</button>
    <NuxtLink to="/sub">sub</NuxtLink>
  </div>
</template>
