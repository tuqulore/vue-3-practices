<script>
import { ref, computed } from "vue";
import { marked } from "marked";
import { debounce } from "throttle-debounce";
export default {
  setup() {
    // 文字列を入力するためのリアクティブな値の参照を作成しています
    const input = ref(`# 見出し

## 中見出し

### 小見出し

- 順序なしリスト
- 順序なしリスト
- 順序なしリスト

1. 順序つきリスト
2. 順序つきリスト
3. 順序つきリスト
`);
    /**
     * debounceによって最後に文字列を入力してから300ミリ秒後に
     * 値を更新するイベントハンドリング関数を定義しています
     */
    const update = debounce(300, (event) => {
      input.value = event.target.value;
    });
    // 入力された文字列をMarkdownとして解析しHTMLに変換しています
    const markdown = computed(() => marked.parse(input.value));
    return { input, update, markdown };
  },
};
</script>

<template>
  <!--
    v-bindディレクティブとv-onディレクティブを使用して
    双方向バインディングをおこなってぃます
    debounceによって値を更新する処理の実行頻度を低減させるため
    v-modelは使用していません
  -->
  <textarea :value="input" @input="update" />
  <!--
    v-htmlディレクティブによってHTMLを挿入しています
  -->
  <article v-html="markdown" />
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

div#app {
  display: flex;
  min-height: 100vh;
}

textarea {
  display: block;
  background-color: #f6f6f6;
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  width: 50%;
  padding: 1rem;
}

article {
  width: 50%;
  padding: 0 2rem;
}
</style>
