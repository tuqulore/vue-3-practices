<template>
  <nav>
    <NuxtLink to="/" :class="{ 'is-active': router.path == '/' }"
      >HOME</NuxtLink
    >
    &nbsp;
    <NuxtLink to="/about" :class="{ 'is-active': router.path == '/about' }"
      >ABOUT</NuxtLink
    >
    &nbsp;
    <NuxtLink to="/contact" :class="{ 'is-active': router.path == '/contact' }"
      >CONTACT</NuxtLink
    >
  </nav>
</template>

<script>
export default {
  setup() {
    const router = useRoute();
    console.log(router.path);
    return {
      router,
    };
  },
};
</script>

<style scoped>
.is-active {
  font-weight: bold;
}
</style>
