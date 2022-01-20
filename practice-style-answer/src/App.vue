<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <h1>見出し</h1>
  <p>テンプレートを変更することなく、見出しの文字の大きさを1remにしてください</p>
</template>

<style>
/**
 * styleタグの中にCSSを記述することで
 * 文字の大きさを変更することができます。
 *
 * 文字の大きさを変更するのに必要なCSSプロパティはfont-sizeです。
 * 参考: https://developer.mozilla.org/ja/docs/Web/CSS/font-size
 *
 * 1remは相対的な長さを示す値です。
 * 参考: https://developer.mozilla.org/ja/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units
 */
h1 {
  font-size: 1rem;
}
</style>
