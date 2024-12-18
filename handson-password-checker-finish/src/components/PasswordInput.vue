<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  modelValue: { type: String, required: true },
});
const emit = defineEmits(["update:modelValue"]);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
const showPassword = ref(false);
function handleClick() {
  showPassword.value = !showPassword.value;
}
</script>

<template>
  <div class="password-input">
    <input
      v-model="value"
      :type="showPassword ? 'text' : 'password'"
      autocomplete="new-password"
    />
    <button @click="handleClick">
      パスワードを{{ showPassword ? "表示" : "非表示" }}
    </button>
  </div>
</template>

<style scoped>
.password-input {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
</style>
