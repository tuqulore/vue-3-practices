<script setup>
const variable = "test";
/**
 * `<script setup>`  を使用する場合、 `<script setup>` 内で宣言された
 * トップレベルのバインディング（変数、関数宣言、インポートを含む）は、テンプレートで直接使用できます
 * 引用:  https://ja.vuejs.org/api/sfc-script-setup.html#basic-syntax
 */
</script>

<template>
  <p>
    テンプレートを変更することなく、testという文字列が表示されるようにしてください。
  </p>
  <p>ここに表示されます: {{ variable }}</p>
  <!--
    VueではMustache構文によってテキスト展開をおこなうことができます。
    参考: https://v3.ja.vuejs.org/guide/template-syntax.html#%E5%B1%95%E9%96%8B
  -->
</template>

<style></style>
