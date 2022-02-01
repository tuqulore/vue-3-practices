<script>
import {ref, onMounted} from "vue";
import {RouterLink} from "vue-router";

export default {
  components: {
    RouterLink
  },
  setup() {
    const posts = ref(null)
    onMounted(async () => {
      const response = await fetch('/wp-json/wp/v2/posts.json')
      posts.value = await response.json()
    })
    return {
      posts
    }
  }
}
</script>

<template>
  <h1>記事一覧</h1>
  <template v-if="posts">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="{name: 'post', params: {id: post.id}}">{{post.title.rendered}}</RouterLink>
      </li>
    </ul>
  </template>
  <p v-else>loading...</p>
</template>

<style>
</style>
