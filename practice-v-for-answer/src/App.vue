<script>
export default {
  setup() {
    const eras = [
      {
        name: "明治",
        startDate: "1868-01-25"
      },
      {
        name: "大正",
        startDate: "1912-07-30"
      },
      {
        name: "昭和",
        startDate: "1926-12-25"
      },
      {
        name: "平成",
        startDate: "1989-01-08"
      },
      {
        name: "令和",
        startDate: "2019-05-01"
      }
    ]
    return {eras}
  }
}
</script>

<template>
  <p>元号の配列があります。各元号の名前と開始日がテンプレートに表示されるようにしてください。</p>
  <!--
    ulタグによって、順序なリストを表現することができます。
    必ずしも使用する必要はありません。
    参考: https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul
  -->
  <ul>
    <!--
      リストレンダリングによって、配列をもとに反復した要素の表示ができます。
      参考: https://v3.ja.vuejs.org/guide/list.html
    -->
    <li v-for="era in eras" :key="era.name">
      {{era.name}}時代は西暦{{
        /**
        * toLocaleDateStringメソッドによって、日付をローカライズすることができます。
        * 必ずしも使用する必要はありません。
        * 参考: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString#checking_for_support_for_locales_and_options_arguments
        */
        new Date(era.startDate).toLocaleDateString("ja-JP", {year: "numeric", month: "long", day: "numeric"})
      }}から始まりました。
    </li>
  </ul>
</template>

<style>
</style>
