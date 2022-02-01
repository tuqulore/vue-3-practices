<script>
import {ref, onMounted} from "vue";
import {RouterLink, useRoute} from "vue-router";

export default {
  components: {
    RouterLink
  },
  setup() {
    const route = useRoute()
    const post = ref(null)
    onMounted(async () => {
      const response = await fetch(`/wp-json/wp/v2/posts/${route.params.id}.json`)
      post.value = await response.json()
    })
    return {
      post
    }
  }
}
</script>

<template>
  <RouterLink to="/">記事一覧に戻る</RouterLink>
  <hr />
  <template v-if="post">
    <article v-html="post.content.rendered" />
  </template>
  <p v-else>loading...</p>
</template>
