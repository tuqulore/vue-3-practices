import { ref, readonly } from "vue";
const count = ref(0);
export default () => {
  const increment = () => count.value++;

  return {
    count: readonly(count),
    increment,
  };
};
