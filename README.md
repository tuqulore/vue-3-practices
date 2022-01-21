# vue-3-practices

Vue 3 / Nuxt 3 を学習するための

- 資料
- ハンズオン
- 演習

を用意したリポジトリです。

## ハンズオン

- Vue 3 [CodeSandbox](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/vite-blank-template?file=/src/App.vue) [StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/vite-blank-template?file=src/App.vue&terminal=dev)
- Nuxt 3 [CodeSandbox](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/nuxt-template?file=/app.vue)(非推奨) [StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/nuxt-template?file=app.vue&terminal=dev)

## 演習

| キーワード | 演習 | 解答 |
| :- | :- | :- |
| `style` | [StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-style?file=src/App.vue&terminal=dev) <!--[CodeSandbox](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/practice-style?file=/src/App.vue)--> | [StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-style-answer?file=src/App.vue&terminal=dev) <!--[CodeSandbox](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/practice-style-answer?file=/src/App.vue)--> |
| `scoped css` `component` | [StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-scoped-css-component?file=src/App.vue&terminal=dev) <!--[CodeSandbox](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/practice-scoped-css-component?file=/src/App.vue)--> | [StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-scoped-css-component-answer?file=src/App.vue&terminal=dev) <!--[CodeSandbox](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/practice-scoped-css-component-answer?file=/src/App.vue)--> |
| `mustache` `setup` | [StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-mustache-setup?file=src/App.vue&terminal=dev) <!--[CodeSandbox](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/practice-mustache-setup?file=/src/App.vue)--> | [StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-mustache-setup-answer?file=src/App.vue&terminal=dev) <!--[CodeSandbox](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/practice-mustache-setup-answer?file=/src/App.vue)--> |
| `reactive` `class binding` `event handling` | [StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-reactive-class-binding-event-handling?file=src/App.vue&terminal=dev) <!--[CodeSandbox](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/practice-reactive-class-binding-event-handling?file=/src/App.vue)--> | [StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-reactive-class-binding-event-handling-answer?file=src/App.vue&terminal=dev) <!--[CodeSandbox](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/practice-reactive-class-binding-event-handling-answer?file=/src/App.vue)--> |
| `v-if` | [StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-v-if?file=src/App.vue&terminal=dev) <!--[CodeSandbox](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/practice-v-if?file=/src/App.vue)--> | [StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-v-if-answer?file=src/App.vue&terminal=dev) <!--[CodeSandbox](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/practice-v-if-answer?file=/src/App.vue)--> |
| `v-for` | [StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-v-for?file=src/App.vue&terminal=dev) <!--[CodeSandbox](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/practice-v-for?file=/src/App.vue)--> | [StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-v-for-answer?file=src/App.vue&terminal=dev) <!--[CodeSandbox](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/practice-v-for-answer?file=/src/App.vue)--> |
| `v-model` | [StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-v-model?file=src/App.vue&terminal=dev) <!--[CodeSandbox](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/practice-v-model?file=/src/App.vue)--> | [StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-v-model-answer?file=src/App.vue&terminal=dev) <!--[CodeSandbox](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/practice-v-model-answer?file=/src/App.vue)--> |

## 注意点

### StackBlitz

Chromium系ブラウザ以外では動作に設定が必要もしくは動作不可能です。詳しくは[こちら](https://developer.stackblitz.com/docs/platform/browser-support/)を参照してください。

### CodeSandbox

現状以下の問題が存在します。代わりにStackBlitzを利用してください。

- Nuxtを用いた演習に対してはHot Module Replacement(HMR)が機能しない [#12](https://github.com/tuqulore/vue-3-practices/issues/12)
- 文字化けする [#38](https://github.com/tuqulore/vue-3-practices/issues/38)
