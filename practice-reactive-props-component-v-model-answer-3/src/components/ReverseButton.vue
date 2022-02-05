<script>
export default {
  props: {
    text: String
  },
  setup(props, context) {
    const handleClick = () => {
      context.emit('update:text', props.text.split("").reverse().join(''))
    }
    return {
      handleClick
    }
  }
}
</script>

<template>
  <button @click="handleClick">文字の並びを反転</button>
</template>


<style>
</style>
