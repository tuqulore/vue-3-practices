<script setup>
import { ref } from "vue";
import PasswordInput from "./components/PasswordInput.vue";
import PasswordChecker from "./components/PasswordChecker.vue";
const password = ref("");
</script>

<template>
  <PasswordInput v-model="password" />
  <PasswordChecker v-if="password.length > 0" :password="password" />
  <p v-else>何か入力するとパスワード強度が判定できます</p>
</template>
