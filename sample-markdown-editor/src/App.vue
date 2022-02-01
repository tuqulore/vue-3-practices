<script>
import {ref, computed} from "vue"
import {marked} from "marked"
import {debounce} from "throttle-debounce"
export default {
  setup() {
    const input = ref('')
    const update = debounce(300, (event) => {
      input.value = event.target.value
    })
    const markdown = computed(() => marked.parse(input.value))
    return {input, update, markdown}
  }
}
</script>

<template>
  <textarea :value="input" @input="update" />
  <article v-html="markdown" />
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

div#app {
  display: flex;
  min-height: 100vh;
}

textarea {
  display: block;
  background-color: #f6f6f6;
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  width: 50%;
  padding: 1rem;
}

article {
  width: 50%;
  padding: 0 2rem;
}
</style>
