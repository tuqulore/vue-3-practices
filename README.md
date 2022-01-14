# vue-3-practices

Vue 3 / Nuxt 3の演習問題集

## 使い方

### CodeSandbox

#### 単体の演習へのアクセス

- [Vue 3 演習用テンプレート](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/vite-template)
- [Nuxt 3 演習用テンプレート](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/nuxt-template)

### StackBlitz

#### 単体の演習へのアクセス

- [Vue 3 演習用テンプレート](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/vite-template?terminal=dev)
- [Nuxt 3 演習用テンプレート](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/nuxt-template?terminal=dev)

#### 全体の演習へのアクセス

1. https://stackblitz.com/github/tuqulore/vue-3-practices にアクセス
2. ターミナルウィンドウで `yarn install` を実行
3. `yarn --cwd <演習のディレクトリ> dev` を実行

## 注意点

### CodeSandbox

現状Nuxtを用いた演習に対してはHot Module Replacement(HMR)が機能しないため、非推奨です [#12](https://github.com/tuqulore/vue-3-practices/issues/12)。

代わりにStackBlitzで演習をおこなってください。

### StackBlitz

一部のブラウザでは動作に設定が必要です。詳しくは[こちら](https://developer.stackblitz.com/docs/platform/browser-support/)を参照してください。
