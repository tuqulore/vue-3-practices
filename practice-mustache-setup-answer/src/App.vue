<script setup>
const variable = "test";
/**
 * setupがオブジェクトを返す場合、コンポーネントのテンプレート内で
 * オブジェクトのプロパティにアクセスすることができます。
 * 引用: https://v3.ja.vuejs.org/guide/composition-api-setup.html#%E3%83%86%E3%83%B3%E3%83%95%E3%82%9A%E3%83%AC%E3%83%BC%E3%83%88%E3%81%A6%E3%82%99%E3%81%AE%E4%BD%BF%E7%94%A8
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
