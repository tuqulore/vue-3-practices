<template>
  <div>
    <h1>ABOUT</h1>
    {{ foo }}
    <p>
      Suspenseを以下のように使うと、子コンポーネント内にasync
      setup()を設定している際、Promiseが解決したタイミングで#default内が表示される
    </p>
    <p>v-ifなどを使わずとも、ローディング処理が可能になる</p>
    <Suspense>
      <template #default>
        <SuspenseTest />
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script>
import useCounter from "~~/composables/useCounter";

export default {
  setup() {
    const foo = useCounter();
    return {
      foo,
    };
  },
};
</script>
