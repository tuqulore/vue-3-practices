<script>
/**
 * v-ifディレクティブから参照される値を変更すると、
 * レンダリング結果が変化します。
 */
const isVisible = false;
</script>

<template>
  <p>テンプレートを変更することなく、次の箇所を消してください</p>
  <!--
    v-ifディレクティブが使用されています。
    v-if ディレクティブは、ブロックを条件に応じてレンダリングしたい場合に使用されます。
    ブロックは、ディレクティブの式が真を返す場合のみレンダリングされます。
    引用: https://ja.vuejs.org/guide/essentials/conditional.html
  -->
  <p v-if="isVisible">ここが消えます</p>
</template>

<style></style>
