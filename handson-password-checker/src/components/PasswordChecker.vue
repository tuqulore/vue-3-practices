<script setup>
import { computed } from "vue";
//import { debounce, throttle } from "throttle-debounce";
const props = defineProps({
  password: String,
});
// 検査する項目
const inspection = computed(() => ({
  length: props.password.length,
  includeAlphabet: props.password.match(/[a-zA-Z]/),
  includeNumber: props.password.match(/[0-9]/),
  includeOther: props.password.match(/[^a-zA-Z0-9]/),
}));
// パスワード強度
const passwordStrength = computed(() => {
  let strength = 10;
  if (inspection.value.length < 10) strength -= 5;
  if (inspection.value.length >= 16) strength += 5;
  if (!inspection.value.includeAlphabet) strength -= 5;
  if (inspection.value.includeNumber) strength += 2;
  if (inspection.value.includeOther) strength += 3;
  return strength;
});
// 判定結果
const result = computed(() => {
  if (passwordStrength.value < 10) return "弱い";
  if (passwordStrength.value < 15) return "少し弱い";
  if (passwordStrength.value < 17) return "普通";
  if (passwordStrength.value < 20) return "少し強い";
  return "強い";
});
</script>

<template>
  <div>
    <p>パスワード強度：{{ result }}</p>
    <section v-show="passwordStrength < 20">
      <h3>パスワード強度をあげるには？</h3>
      <ul>
        <li v-show="inspection.length < 10">
          文字数は最低で10文字、可能なら16文字以上にする
        </li>
        <li v-show="!inspection.includeAlphabet">アルファベットを含む</li>
        <li v-show="!inspection.includeNumber">数字を含む</li>
        <li v-show="!inspection.includeOther">
          英数字以外（記号など）の文字を含む
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
dl {
  display: flex;
  gap: 0.5rem;
}
</style>
