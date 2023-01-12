<script setup>
/**
 * `<script setup>`  を使用する場合、 `<script setup>` 内で宣言された
 * トップレベルのバインディング（変数、関数宣言、インポートを含む）は、テンプレートで直接使用できます
 * 引用:  https://ja.vuejs.org/api/sfc-script-setup.html#basic-syntax
 */
import { RouterLink } from "vue-router";
</script>

<template>
  <ol>
    <li value="2">
      RouterLinkコンポーネントを使って、TopPageコンポーネントからAnotherPageコンポーネントへ表示が切り替わるようにしてください
    </li>
  </ol>
  <!--
    toプロパティを使うことによって、遷移先のルートを指定することができます。
    参考: https://next.router.vuejs.org/api/#to
  -->
  <RouterLink to="/another-page">アナザーページ</RouterLink>
  <!--
    発展: Vue Routerインスタンスを作成する際に、createWebHashHistoryの代わりにcreateWebHistoryを使うとどのような変化が生じるか、観察してみましょう
    参考: https://next.router.vuejs.org/api/#createwebhistory
  -->
</template>

<style></style>
