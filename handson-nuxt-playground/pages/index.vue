<template>
  <div>
    <h1>HOME</h1>
    <UserList />
    composables counter: {{ counter.count }}
    <img src="/user-photo-1.png" alt="" />
  </div>
</template>

<script>
export default {
  setup() {
    useMeta({
      title: "トップページ",
      meta: {
        name: "description",
        content: "ページの要約文",
      },
      bodyAttrs: {
        class: "test",
      },
    });
    const counter = useCounter();
    return {
      counter,
    };
  },
};
</script>
