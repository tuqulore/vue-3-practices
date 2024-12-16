---
# try also 'default' to start simple
theme: "default"
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

<div class="text-center">
<img src="/logo.svg" alt="Vue" style="width: 100px;" class="inline mb-4" />

<h1 class="!text-5xl">Vue3 Practices</h1>

</div>

---

# アジェンダ

- はじめに
  - Composition API, 学習環境など
- 本講座の目標
- 本講座のすすめかた
- リアクティブとは？
- 算出プロパティ（computed）
- ウォッチャ（watch）
- テンプレート構文の説明
  - mustache, v-bind, v-on, v-if/v-else/v-else-if, v-show, v-for, v-model など
- コンポーネント
  - props, emit, slot など

---

# はじめに

## Vue.js とは？

Web アプリケーション[^1]におけるユーザーインターフェイス[^2]を構築するための、オープンソース[^3]の JavaScript フレームワーク[^4]。

[^1]: 用途に応じて作られ、Web 技術で動作するソフトウェアのこと

[^2]: ユーザー：利用者とシステム：利用される仕組みを形づくる境界のこと

[^3]: [オープンソースライセンス](https://opensource.org/licenses/)を適用していること

[^4]: コードをこう書くべし、あるいはコードをこう書くべからず、という約束ごとの集まり

<div class="pt-4 text-sm">

<a href="https://ja.vuejs.org/guide/introduction.html">
<carbon:arrow-right class="inline" /> 公式サイト
</a>
</div>

---

# 本講座の目標

講座をすすめていく上でどんな状態になってほしいかというと…

1. リアクティブプログラミングを体感する
2. コンポーネント駆動開発の一歩を踏み出す
3. Vueを読み書きできる
4. VueでWebアプリケーションを作りたくなる
   - そんなときにNuxt（VueのWebアプリケーションフレームワーク）が便利だと体感する

---

# 本講座のすすめかた

ハンズオン ≒ コードを書いて動かすこと（1 回 10 分程度）をメインに取り組みます。

適宜説明を挟みますが、動かない、分からないとき、その他なんでも（大抵は他の受講者も同じことを考えています！）質問をお願いします。

---

# ブラウザのハンズオン環境（Vue SFC Playground）を用意する

本講座の前半のハンズオンは [Vue SFC Playground](https://play.vuejs.org/) でおこないます。

Vue SFC Playgroundはブラウザ上でVueの動作が確認できるオンラインエディターです。

以下をやってみましょう

1. https://play.vuejs.org/ にアクセス
2. 右カラムの画面にある入力欄へ「Hello World!」以外の文字列を入力
3. 右カラムに`Hello World!`以外の文字列が見出しで表示されることを確認

編集した内容は共有ボタン <mdi-share-variant /> で再現可能なURLとして保存できます。

講師の編集内容もリクエストに応じて適宜共有していきます。

<img class="fixed right-0 bottom-0" src="/vue-sfc-playground-example.png" alt="" width="400">

---

# ブラウザのハンズオン環境（StackBlitz）を用意する

本講座の後半のハンズオンは [StackBlitz](https://stackblitz.com/) でおこないます。

StackBlitzはブラウザ上でVueの動作の確認やアプリのビルドができるオンラインIDE（統合開発環境）です。

以下をやってみましょう

1. https://vite.new/vue にアクセス
2. 右のカラムの画面にある「Count is 0」ボタンをクリックする
3. ボタンのラベルが「Count is 1」になることを確認

編集した内容は保存が可能です（要GitHubアカウントorサインアップ）

講師の編集内容もリクエストに応じて適宜共有していきます。

<img class="fixed right-0 bottom-0" src="/stackblitz-example.png" alt="" width="400">

---

# Node.jsをお手元にインストールしたハンズオン環境を用意する（宿題）

お願い：ブラウザのハンズオン環境で正常に動作しない時の保険としてあらかじめ用意してください

<h2 class="!text-base font-bold !mt-1">前提条件</h2>

[@kou029w](https://github.com/kou029w)さんの[Node.jsを使うための入門ガイド](https://kou029w.github.io/nodejs-hands-on/index.html)に目を通してセットアップをしてください  
（Node.js バージョンは最新のLTS=v22でお願いします）

- [Node.jsのインストール - Node.jsを使う](https://kou029w.github.io/nodejs-hands-on/installing-nodejs.html)
- [VSCodeのインストール - Node.jsを使う](https://kou029w.github.io/nodejs-hands-on/installing-vscode.html)
- [VSCodeの拡張機能 - Node.jsを使う](https://kou029w.github.io/nodejs-hands-on/vscode-extensions.html)

---

# Node.jsをお手元にインストールしたハンズオン環境を用意する（宿題）

<h2 class="!text-base font-bold !my-2">手順</h2>

1. リポジトリのソースコードが含まれたZIPファイルをダウンロード https://github.com/tuqulore/vue-3-practices/archive/refs/heads/main.zip
2. ZIPファイルを展開
3. 展開して得られたファイル群をFinderやファイルエクスプローラーなどで確認する

```console
$ tree -L 1 # ファイル群の階層構造を確認するコマンド（例示なので各自実行する必要はありません）
.
├── LICENSE
├── README.md
├── docs
├── handson-fetch-router
├── handson-fetch-router-finish
└── ...
```

4. handson-grid-componentディレクトリをVSCodeで開く
5. VSCodeのターミナルを表示する（メニューバー→表示→ターミナル）
6. VSCodeのターミナルで `npm install` を実行して動作に必要な[パッケージをインストール](https://docs.npmjs.com/downloading-and-installing-packages-locally)
7. VSCodeのターミナルで `npm run dev` を実行してアプリケーションを起動する

---

# Node.jsをお手元にインストールしたハンズオン環境を用意する（宿題）

<h2 class="!text-base font-bold !my-2">確認すること</h2>

- ターミナルに`http://localhost:5173/`のようなURLが表示されること
- URLをブラウザーで開くと表のようなものが表示されること
- 適当に`handson-grid-component/src/App.vue`をコードエディターで編集して保存すると  
  ブラウザーの表示内容が変わること
- ターミナルでキーボードショートカット`Ctrl + C` を入力すると  
  アプリケーションが停止すること

<div class="flex gap-2">

<img src="/vscode-example.png" alt="" width="300">

<img src="/grid-component-example.png" alt="" width="300">

</div>

---

# Vue には 2 つの API があります

<div class="flex gap-8">

<div>
Options API

```vue
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
};
</script>
```

</div>
<div>
Composition API

```vue
<script>
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value += 1;
    };
    return { count, increment };
  },
};
</script>
```

</div>

- Options API：ひな形に沿って書く
  - 「値の定義はここ！（data 関数）」
  - 「値の操作はここ！（methods 関数）」
- Composition API：  
  関心ごと（処理したい対象）に沿って書く
  - 定数宣言も関数宣言も JavaScript 構文そのまま
  - どの行に何を書くか自由度が高い

</div>

VueはOptions APIとComposition APIの2種類のAPI：アプリケーションを実装（プログラミング）するために用意された決めごとがあります。

[公式ドキュメント](https://ja.vuejs.org/guide/introduction.html#which-to-choose)ではどちらも優劣なくドキュメントが用意されています。本講座はComposition APIだけを取り扱いますが、もし[クラスベーススタイル](https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%A9%E3%82%B9%E3%83%99%E3%83%BC%E3%82%B9)の[オブジェクト指向プログラミング](https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0)をしたことがあるなら、Options APIはとっつきやすいかもしれません。

---

# Vue には様々なシンタックスシュガー（糖衣構文）があります

<div class="flex gap-8">

<div>
script

```vue
<script>
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value += 1;
    };
    return {
      count,
      increment,
    };
  },
};
</script>
```

</div>
<div>
script setup

```vue
<script setup>
import { ref } from "vue";

const count = ref(0);
const increment = () => {
  count.value += 1;
};
</script>
```

</div>
</div>

現状Vueでは、簡潔なコードで表現するための支援機能として、シンタックスシュガー（糖衣構文）：読み書きを楽にするための書き方が提供されることがあります。HTML とも JS とも異なる構文への理解が求められる反面、記述量が減る、コードの複雑さが減るといったメリットがあるので、本講座では積極的に取り扱います。

---

# まずは書いてみましょう

<div class="flex gap-8">

```vue
<script setup>
import { ref } from "vue";

const count = ref(0);
function increment() {
  count.value += 1;
}
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
  </div>
</template>

<style scoped>
button {
  border: 1px solid;
  padding-inline: 1rem;
}
</style>
```

<div>
動作サンプル

<FirstSample class="mb-32" />

- `<script></script>` の中に JavaScript を書く
- `<template></template>` の中に HTML を書く
  - `{{}}` の中に JavaScript の値や式が書ける
- `<style></style>` の中に CSS を書く
  - `scoped` 属性をつけると、CSS がここの HTML にだけ適用されるようになる

</div>

</div>

---

# リアクティブとは？

<div class="flex flex-col gap-4">

<div>

<blockquote>
  最近この用語がプログラミングでよく出てくるようになりましたが、人々がそれについて話すとき、何を意味しているのでしょうか？リアクティビティーとは、宣言的な方法で変化に対応できるようにするプログラミングパラダイムです。よく挙げられる典型的な例として Excel のスプレッドシートが挙げられます
  <footer>
    <cite>
      <a href="https://ja.vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity">公式ドキュメント</a>
    </cite>
  </footer>
</blockquote>

<p class="bg-lime-100 pl-4 pr-6 py-3 rounded-lg inline-flex gap-3 items-center">
  <mdi-lightbulb-on-outline />
  <span>
    <a href="https://ja.vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity">公式ドキュメント</a>に表計算風のプログラムがあるので触ってみましょう
  </span>
</p>

</div>

<div>

表計算ソフトと同じ手順をコードにすると

```js
let val1 = 2;
let val2 = 3;
let sum = val1 + val2;

console.log(sum); // 5

val1 = 3;

console.log(sum); // 5のまま（期待は6）
```

</div>

</div>

---

# リアクティブとは？

<div class="flex gap-4">

<div>

表計算ソフトと同じことをおこなうには以下ができる必要がある

1. 値が読み込まれたときに追跡する。 例: val1 + val2 のとき、式の結果だけでなく  
   val1 と val2 の値が失われずに読み取れる
2. 値の変更を検知する。 例: val1 = 2 が val1 = 3 になったと分かる
3. 最初に値を読み込んだコードを再実行する。 例: val1 = 3 で  
   sum = val1 + val2 を再計算する

これらができているとき、リアクティビティ（反応性）がある=リアクティブ

Vueにはリアクティビティを提供するAPI：アプリケーションを実装（プログラミング）  
するために用意された決めごとがあります。

</div>

<div>

```js
let val1 = 2; // 1.
let val2 = 3; // 1.
let sum = val1 + val2; // 1.

console.log(sum);

val1 = 3; // 2.

console.log(sum); // 3.
```

</div>

</div>

---

# ref によるリアクティブな値の参照

`ref` を使った値を操作する場合、`setup` 関数内では `value` プロパティにアクセスする。
`template` 内では変数（定数）そのものを参照するだけで値を得られる。

<div class="flex gap-8">

```vue
<script setup>
import { ref } from "vue";

const val1 = ref(2);
const val2 = ref(3);
</script>

<template>
  <div>
    <p>
      val1:
      <input type="number" v-model="val1" />
    </p>
    <p>
      val2:
      <input type="number" v-model="val2" />
    </p>
    <p>sum: {{ val1 + val2 }}</p>
  </div>
</template>
```

<div>

<ReactiveSample />

https://play.vuejs.org/ で書いてみよう

</div>

</div>

---

# 算出プロパティ（computed）

あるリアクティブな値を元に計算結果を返したいときは、`computed` 関数を使う

```vue
<script setup>
import { ref, computed } from "vue";

const count = ref(1);
const plusOne = computed(() => count.value + 1);
</script>

<template>
  <div>
    <input type="number" v-model="count" />
    {{ plusOne }}
  </div>
</template>
```

https://play.vuejs.org/ で書いてみよう

興味がある人向け：算出プロパティの値を上書きしたい！→[書き込み可能な算出関数（公式ドキュメント）](https://ja.vuejs.org/guide/essentials/computed#writable-computed)を読みましょう

---

# 関数呼び出しと算出プロパティ（computed）の違い

関数呼び出しは都度呼び出される毎に実行されるが、算出プロパティ（computed）は `computed` 関数内で参照しているリアクティブな値が変更されない限り、キャッシュされた結果を返す。  
うまく使い分けるとパフォーマンスの向上に役立てられる。

<div class="flex gap-4">

```vue
<script setup>
import { computed } from "vue";

const randomMethod = () => {
  return Math.random();
};
const randomComputed = computed(() => {
  return Math.random();
});
</script>
```

```vue
<template>
  <p>関数呼び出しの場合</p>
  <ol class="use-methods">
    <li>{{ randomMethod() }}</li>
    <li>{{ randomMethod() }}</li>
    <li>{{ randomMethod() }}</li>
  </ol>
  <p>computedを使った場合</p>
  <ol class="use-computed">
    <li>{{ randomComputed }}</li>
    <li>{{ randomComputed }}</li>
    <li>{{ randomComputed }}</li>
  </ol>
</template>
```

<div>
  <ComputedMethod />
</div>

</div>

https://play.vuejs.org/ で書いてみよう

---

# ウォッチャ（watch）

特定のデータを監視し、変更があったときに処理を行える、引数として、新しい値とその前の値を取得できる。

```vue
<script setup>
import { ref, watch } from "vue";

const count = ref(1);
// 今の値とひとつ前の値の配列のリアクティブな値
const histories = ref([{ current: count.value, prev: null }]);
watch(count, (current, prev) => {
  // 配列の先頭に値を追加する
  histories.value.splice(0, 0, { current, prev });
});
</script>
<template>
  <input type="number" v-model="count" />
  <h3>値の履歴（nステップ前の値が表示されます）</h3>
  <ol start="0">
    <li v-for="(history, index) in histories" :key="index">
      今の値: {{ history.current }}、前の値: {{ history.prev ?? "なし" }}
    </li>
  </ol>
</template>
```

https://play.vuejs.org/ で書いてみよう

---

# watch と computed の違い

`watch`は値の変化を監視に特化したAPIだが、`computed`は値の変化に応じて値を加工（算出）するためのAPI

値が変化したタイミングで、変化した値の中身が…

- 必要→computedを使いましょう
- 不要→watchを使いましょう

使用頻度としてはcomputedの方が多いのでcomputedを使いこなせるようになりましょう。

---

# さまざまなリアクティビティAPI

<div class="text-sm [&>p]:my-0">

[reactive()](https://ja.vuejs.org/api/reactivity-core#reactive)：リアクティブな値をオブジェクトのプロパティにまとめる

```js
const obj = reactive({ count: 0 }); // 値の作成
console.log(obj.count); // 値の読み出し
obj.count = 1; // 値の更新（.valueが不要な点に注意）
```

[toRefs()](https://ja.vuejs.org/api/reactivity-utilities.html#torefs)：Reactive オブジェクトを Ref オブジェクトに変換する

```js
const obj = reactive({ count: 0 }); // 値の作成
const { count } = toRefs(obj); // refへの変換
console.log(count.value); // obj.countと同じ値
```

[readonly()](https://ja.vuejs.org/api/reactivity-core#readonly)：リアクティブな値を書き込みできないようにする

```js
const obj = reactive({ count: 0 }); // 値の作成
const readonlyObj = readonly(obj); // 読み取り専用の値の作成
readonlyObj.count = 1; // 値の更新（阻止される）
```

[watchEffect()](https://ja.vuejs.org/api/reactivity-core#watcheffect)：この関数で使われたリアクティブな値をすべて監視するウォッチャ

```js
const count = ref(0);
watchEffect(() => console.log(count.value)); // countが更新される度に実行される
```

</div>

これまで取り上げたものと比べると重要じゃないので、「使いどきがあるかも」くらいに思えればOKです。  
（ただ、watchEffectは監視対象の指定がいらないのでwatchより便利かも…）

---

# おさらい演習タイム

お疲れ様でした！リアクティブについて理解できましたか？  
ご自身の理解度を再確認するために自由に演習を行ってください。

まずはどれか一つを選んでやってみましょう。

1.はご自身で自由に書きたい場合にお使いください。  
2.と3.は問題形式になります、工夫して解いてみてください。

1. [自由に書くための雛形](https://play.vuejs.org/#eNp9kUFLwzAUx7/KM5cqzBXR0+gGKgP1oKKCl1xG99ZlpklIXuag9Lv7krK5w9it7//7v/SXthP3zo23EcVEVKH2yhEEpOhm0qjWWU/QgccV9LDytoWCq4U00tTWBII2NDBN/LJ4Qq0tfFuvlxfFlTRVORzHB/FA2Dq9IOQJoFrfzLouL/d9VfKUU2VcJNhet3aJeioFcymgZFiVR/tiJCjw61eqGW+CNWzepX0pats6pdG/OVKsJ8UEMklswXa/LzkjH3G0z+s11j8n8k3YpUyKd48B/RalODBa+AZpwPPPV9zx8wGyfdTcPgM/MFgdk+NQe4hmydpHvWz7nL+/Ms1XmO8ITdhfKommZp/7UvA/eTxz9X/d2/Fd3pOmF/0fEx+nNQ==)
2. [税込み計算機をつくる](https://play.vuejs.org/#eNp9Us9rE0EU/lceA1KVmKToKWwDKj3oQUU9ziVuXuLW3dlhZjZGlj2MSBsPWn8gehC0l1LopfTQQxvaP2ZIm576L/TNLmkDLYU5zHzf99773sfk7KGU9UGGrMUCHapIGtBoMtnmIkpkqgzkoLBXC9NEZga7UEBPpQksUM0CF2EqtAGpohBhyQtvLzabd2a46QwJbdYXuQgaVXfqSw+DiYw7BukFEMj2ZGd9ujVqQRAJmgLmg8QlzkSWvEHFGQzuJWkXY4LKSYQ02jBZXQ0a3mfZ4XhvNN09ONn62oI893PvAjkpCrg1JyJ6ejiefBvRsNO176cbX1pwNh45+7M825UNgv396K+zf5z9d7XIffwxWdt39rezm86uO/vf2V/Ofjobf66GBY25BVmNGU159KJ+fUWngpLOvR/OfKZRjOq5NBHlxRl594znOnGcvn9aYkZlWJvh4VsM312Dr+ihxzh7oVCjGlBIF5zpqD6ail5+9QyHdL8gKdksJvUN5EvUaZx5j5XsUSa6ZHtOV7p9Uv6XSPRf6+WhQaFnS3mjXlmUes7o6zy+YfVLu/frD8o6LgpWnAM5Bwi/)
3. [計算結果に応じて文字を出し分ける](https://play.vuejs.org/#eNp9kkFrE0EUx7/KMCelISFUL3EbtFJBDyrqcS5xM4nb7s4uuzM1dFnY2UgNNUEQYhE8qEgpFKvgTdR+mMfGfgzf7JiYQts9zfzf7739z3svpbeiqL6tOG1RJ3FjL5Ik4VJFbSa8IApjSVIS816NuGEQKcm7JCO9OAwIo5jF6A0m3FAkEuNKSLJm4CvNqyg7DVsPK+FF8iDyO5LjjRDHlCf4QXEExQEMv8NwBMP3UJyYc/FmtvcT9DvQh7PpN9DjZvlpH/QI9G+j5oVVV0Efl/mkuhwjC3oC+ivk4zvezg7kE8i1Ba9fBK6rs2DzQtKUnNNGfgF6d/b2ZfllvxyhtfHpx8M/n3+AnkIxhuIVFGh2F/TR6cmvcu8DaGQOQL8GjeepSc+LqhEN2wnnqZIyFOSm63vu1hqjVTdXVhhtL7fIaVhu3kT02SJp+q/3WbYoF7WtoZZVnMZS+5mgNSoTnFrP69c3k1Dg7FOTZn4bRJ7P4weR9HCqjGJ5OylGO74fPr9XaTJWvDbX3Wfc3TpH30wGRmP0YcwTHm/jsixishP3ubThjcf3+QDPi2AQdpWP9CXBRzwJfWU8WmxdiS7aXuIqt3erDfZE/0myMZBcJPNHGaOGzCq+WuXblzz9v93V+rUqj4mMZn8B7+JogQ==)

---

# テンプレート構文

- 展開
- ディレクティブ
- バインディング
- イベントハンドリング
- 条件付きレンダリング
- リストレンダリング
- フォーム入力バインディング

---

# 展開

Mustache 構文でテキスト展開できる。JavaScript 式を使用することもできる

```vue
<script setup>
const msg = "Hello!";
</script>

<template>
  <div>Message: {{ msg }}</div>
</template>
```

結果

```
Message: Hello!
```

https://play.vuejs.org/ で書いてみよう

---

# 展開（リアクティブな値を使うと）

<p class="text-sm">
counterを1秒ごとに増やしていく
</p>

```vue
<script setup>
import { ref } from "vue";

const counter = ref(10);
setInterval(() => {
  counter.value += 1;
}, 1000);
</script>

<template>
  <div>Counter: {{ counter }}</div>
</template>
```

結果

<CounterSample />

https://play.vuejs.org/ で書いてみよう

---

# ディレクティブ

- ディレクティブは Vue によって提供される特別な属性
- v- から始まる
- 特定のディレクティブ（v-bind と v-on）は省略記法がある（例：`:href` `@click`）
- 特定のディレクティブは引数を渡すことができる（例：`v-on:click`）

ディレクティブが使われている箇所は Vue の機能と関係していると気づけるとよい

---

# バインディング

「展開」と同じようにリアクティブな値を HTML 属性に反映させる場合、 `v-bind` ディレクティブを使う

<div>

```vue
<script setup>
const url = "https://ja.vuejs.org/";
</script>

<template>
  <a v-bind:href="url"> Vue.js公式サイト </a>
</template>
```

省略するとこのように書ける

</div>

```html
<a :href="url"> Vue.js公式サイト </a>
```

https://play.vuejs.org/ で書いてみよう

---

# バインディング（クラスとスタイル）

クラス属性とスタイル属性のバインディングにはオブジェクト構文と配列構文がある

<div class="flex gap-6">

<div>

<p class="text-xs">オブジェクト構文</p>

```vue
<script setup>
import { ref } from "vue";

const isRed = ref(true);
</script>

<style>
.text-red {
  color: red;
}
.bg-gray {
  background-color: #ccc;
}
</style>

<template>
  <span :class="{ 'text-red': isRed }">Hello World!</span>
</template>
```

</div>

<div>

<p class="text-xs">配列構文（値の組み合わせに便利）</p>

```html
<span :class="['bg-gray', { 'text-red': isRed }]">Hello World!</span>
```

<p class="text-xs">スタイル属性にもオブジェクト構文と配列構文がある</p>

```vue
<script setup>
const myColor = { color: "red" };
const mySize = 30;
</script>

<template>
  <p :style="myColor">テキスト</p>
  <p :style="[myColor, { 'font-size': `${mySize}px` }]">テキスト</p>
</template>
```

https://play.vuejs.org/ で書いてみよう

</div>

</div>

---

# イベントハンドリング

`v-on` ディレクティブは HTML 要素などの[イベント](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events)操作に使われる。`:`の後の引数でイベントの種類を指定できる

<div class="h-60 mb-6 overflow-y-auto">

```vue
<script setup>
import { ref } from "vue";

const counter = ref(0);
</script>

<template>
  <div>
    <button v-on:click="counter += 1">Add 1</button>
    <p>clicked {{ counter }} times.</p>
  </div>
</template>
```

</div>

省略するとこのようにかける

```html
<button @click="counter += 1">Add 1</button>
```

https://play.vuejs.org/ で書いてみよう

---

# イベントハンドリング（関数名を属性値として使う）

関数を渡すと複雑な処理が書きやすい

```vue
<script setup>
import { ref } from "vue";

const counter = ref(0);
function increment() {
  counter.value += 1;
}
</script>

<template>
  <div>
    <button @click="increment">Add 1</button>
    <p>clicked {{ counter }} times.</p>
  </div>
</template>
```

https://play.vuejs.org/ で書いてみよう

---

# 条件付きレンダリング

`v-if` あるいは `v-show` によって条件に応じてレンダリングする範囲を変更することができる。 `v-show` は見た目上非表示にするが `v-if` は DOM 要素も取り除く。

```vue {all|7|2|all}
<script setup>
const seen = true;
</script>

<template>
  <div id="conditional-rendering">
    <span v-if="seen">Now you see me</span>
  </div>
</template>
```

<arrow v-click="2" x1="400" y1="250" x2="180" y2="200" color="#564" width="3" arrowSize="1" />

https://play.vuejs.org/ で書いてみよう

---

# 条件付きレンダリング（v-if と v-show の使い分け）

<div class="mb-6">

|                | v-if | v-show |
| :------------- | :--- | :----- |
| 初期コスト     | 低い | 高い   |
| 切り替えコスト | 高い | 低い   |

</div>

- ページを表示した後に変化しないケースであれば `v-if`を使う
- 何度も表示、非表示を切り替えるするケースであれば `v-show`を使う

---

# 条件付きレンダリング

`v-if v-else v-else-if` でレンダリングの条件分岐ができる。 `template` 要素に対して使うことでグルーピングすることもできる。

<div class="flex gap-4">

```vue
<script setup>
const type = "A";
</script>

<template>
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
</template>
```

```vue
<script setup>
const ok = true;
</script>

<template>
  <template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>
</template>
```

</div>

https://play.vuejs.org/ で書いてみよう

---

# リストレンダリング

配列あるいはオブジェクトをもとに反復した要素の表示ができる。

<div class="flex gap-8">

```vue
<script setup>
const todos = [
  { text: "Learn JavaScript" },
  { text: "Learn Vue" },
  { text: "Build something awesome" },
];
</script>

<template>
  <div id="list-rendering">
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>
```

<div class="flex-shrink">

結果

1. Learn JavaScript
2. Learn Vue
3. Build something awesome

https://play.vuejs.org/ で書いてみよう

</div>

</div>

---

# リストレンダリング（`key` 属性の付与）

要素の再利用と並び替えを考慮する場合、一意な値を `key` 属性に渡す必要がある。

<div class="flex gap-8">

```vue
<script setup>
const todos = [
  { text: "Learn JavaScript", id: 1 },
  { text: "Learn Vue", id: 2 },
  { text: "Build something awesome", id: 3 },
];
</script>

<template>
  <div id="list-rendering">
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>
```

<div class="flex-shrink">

結果

1. Learn JavaScript
2. Learn Vue
3. Build something awesome

https://play.vuejs.org/ で書いてみよう

</div>

</div>

---

# リストレンダリング（添字による `key` 属性の付与）

識別子を用意していない場合、添字が得られるので代用すると便利。

<div class="flex gap-8">

```vue{all|12}
<script setup>
const todos = [
  { text: "Learn JavaScript" },
  { text: "Learn Vue" },
  { text: "Build something awesome" },
];
</script>

<template>
  <div id="list-rendering">
    <ol>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>
```

<div class="flex-shrink w-110">
結果

1. Learn JavaScript
2. Learn Vue
3. Build something awesome

https://play.vuejs.org/ で書いてみよう

ただし、並び替えることが想定される場合意図しない挙動になる（どこにリストアイテムが移動したのか検知できない）ので注意

</div>

</div>

---

# フォーム入力バインディング

`v-model` によって form の input 要素や textarea 要素、select 要素の入力イベントに応じてデータを更新できるようになる。

<div class="flex gap-8">

```vue
<script setup>
import { ref } from "vue";

const message = ref("Hello Vue!");
</script>

<template>
  <div id="two-way-binding">
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
</template>
```

<div>

<TwoWayBindingSample/>

https://play.vuejs.org/ で書いてみよう

興味がある人向け：[他にも様々なフォーム入力バインディングの例があります（公式ドキュメント）](https://ja.vuejs.org/guide/essentials/forms#basic-usage)

</div>

</div>

---

# おさらい演習タイム

お疲れ様でした！テンプレート構文について理解できましたか？
テンプレートの書き方の演習を用意したので、理解を深めるために取り組んでみましょう。

想定解は用意していないので、演習通りにやるかどうかも自由です。
時間の許す限り、どうすれば自分がイメージした通りにテンプレートが書けるか試行錯誤してみてください。

0. [好きに書いてみる](https://play.vuejs.org)
1. [四角形の色を変える](https://play.vuejs.org/#eNp9U09rE0EU/yrDnFpoN4p6WTdBLT3oQaV63Mtmd5JMM7uzzMymkRBwNiKihYIgWhVSUFTqQVDEk/hhHqX6LXwza2OU0oWFee/9fvN+789M6NWyDEYVoyGNdKp4aYhmpio7ccHzUipDJkSxHpmSnpI5iSliY3o5LlJZaEO43mIZaTvISi8Rmq0uQoOkyATbEDwdImBllbQ7ZBIXpOEEo0RUDAOehaQp/lGrkYDJ0TAsL0ViGFqERE4RwQ9mr6H+AbMvUD+F+hPMDmE2cwe7D/UTsB/gvj3+9hLs+6NXn6Heg3oX7PzXwYuj+Rzs7s+vb8HugT0E+wb9UD8+3v/+n+fPVfUjsA/BfgT7HOw7jzkA+wzsAy+o1SiKupUxsiBXUldpO6ZLdce0s5AbtRpgQ8r4iKQi0RoJqRRS9Sqx3pXjmJIWIqLWUvFoanNPuGOwjG26mSeqz4uQnFcsJ+ewiYTs8MwMQnIJPd4eMN4fmCVHV6qMKeSUY6Kl4BnpiiQduim4dP9kCbheVzhjn6yLqL6SVZGte0yIg88aGs7Oi6Rr1GjcgB7vB9taFrhYnurqzEsumLpVGo4bEtOwudTFEiHkzg3vM6piayf+dMDS4Sn+bY2tCvFwWzHN1Ah3chEz2BFmmvDmnZtsjOdFMJdZJRB9RnCLYU8qp7GBXcNyUfYSzqu97p8HL/p39ebYsEKfFOWEOuTU4/2L2Tij9L9yLwQXPQ/7Sae/AYwhZRc=)
2. [文字を消す](https://play.vuejs.org/#eNp9UsFKAzEQ/ZUl59oe9FS3Cyo96EFFxVMudZvW1N1s2GRrpRSarmiLgqBIES8KIiKlF8WT+DOD62+Y7NLagxQCycx7M/PekDZa4TzfjAgqIlu4IeXSEkRG3MHMDZiQFhX7VNADj1glS4YRWcbMLmRMzdGBJD73KpLoyLJs7kB8BvEbxEOIRxB/QtyH3vX30yC5fwd1B70LUDegXkC9grqCrkpGj6DGP+PzZNDVzOSjD2oI6tmg6gHULahTu2AEmfZWc4HWShhNZWHkpA31uUxr9fnSg7ISuzAjT4dCnnjE0QbSGzOUQ1JoozVazzdEwPQa2mYQRm7gc+qRcItLqheBUdFKEYNVPC843khzZiW5Sd49JO7RP/mGaJkcRtshESRsatFTTFbCOpEZXN7dJC39noJ+UI2MxTngDhGBFxmNGW01YlUte4aXql33eRBKyup7otyShImJKSPUMDspHyP9F9bmWP+Tu5hfSusw66DOLyAO5Ss=)
3. [元号を並べて表示する](https://play.vuejs.org/#eNqFU01v00AQ/SurPTeJk9KShlCJjx7gAAi4sRysdAku9tryrktQFYm12yqQhEZIkHIDEWglKAd6QFDEnxls6L9g7LRphJr0svbMm3n75ml2jV7yvPxqwGmFVmXNtzxFJFeBt8hEzRVSEe6bklwk95ggZC09CBGmwyuE0WT7RfL1gNGZYVoq01dXTZVhxfJ8OWcUc6W5I7yZnf8xxIOdZO/9BIaFYilnnM/NGtMYku29+GVnEkNpPockZ2j4vp+0epMYygvpFEZ5GsPvg8FEDSWjiAxzSDLGcP8CE9XC0G40GgPFHc/GFowIqabup0zxRhRvfQP95XCjG7f6oDugQwifg/4F+g08DePe+qgm7nXjZ13Qu4ev2/FOO+l/SOujTYj2IepD9BminxC1QH/6+273z+AH6FcQdiBsQ4jJTcyDxis+gt4C/TZF9TpekQkqpIqqhTGVGEr1xOaLOEf2ZYLOUCVxaR5Y9fyKdAWuVGYUozXX8Syb+zc9ZeFSMVo5tpBR07bdx9eznPIDfuQh9jzktUen5FdkI80xesvnkvurfOQ7o2h8nashvHTnBm/g/wh03OXAxuop4G0uXTtINQ7LLgdiGWWP1WVqrzme6ytL1O/KpYbiQh4PlQo92RJG8V1dmTL6idzZ/Lmsj4kmbf4DMLVTog==)

---

# コンポーネント

- コンポーネントとは？
- コンポーネントの構成
- プロパティを用いた子コンポーネントへのデータの受け渡し
- イベント購読を用いた親コンポーネントへのデータの受け渡し
- v-model を用いた親子間コンポーネントのデータの受け渡し
- v-model を用いない親子間コンポーネントのデータの受け渡し
- コンポーネントで v-model を使う
- スロットによるコンテンツ配信

---

# コンポーネントとは？

「この部品は、この見た目と振る舞いをしてほしい」を管理する仕組み

チャットを例にすると:

![](/chat-component-example-1.png)

<div class="flex gap-12">

<section>

見た目としては…

- だれの発言か分かる名前
- 顔写真
- いつの発言か分かるタイムスタンプ
- 発言の内容

</section>
<section>

振る舞いとしては…

- 引用できる
- 返信できる
- 本文をコピーできる
- ...

</section>

</div>

---

# コンポーネントとは？

「この部品は、この見た目と振る舞いをしてほしい」を管理する仕組み

似てるけど微妙に違う見た目はどうする？（たとえば自分以外のチャット）

![](/chat-component-example-2.png)

- コンポーネントにデータを渡す仕組みがある（プロパティ）
- チャットコンポーネントのプロパティとしては…
  - 見た目に関するデータはプロパティにできるかも
  - チャットのデータの識別子だけプロパティにして、  
    チャットコンポーネント内でチャットのデータを取得することもできるかも
  - 自分の発言か、自分以外の発言かのフラグをプロパティにしてもいいかも
- 見た目が違うなら別のコンポーネントとして定義することも考えられる
- コンポーネント設計次第なので正解はない

---

# コンポーネントとは？

「この部品は、この見た目と振る舞いをしてほしい」を管理する仕組み

似てるけど微妙に違う見た目を並べたいときはどうする？（たとえばチャットの会話）

<div class="flex gap-12">

<img class="h-90" alt="" src="/chat-component-example-3.png">

- コンポーネントにすると見た目と振る舞いを再利用できる
- [サンプル](https://play.vuejs.org/#eNqlVdtu3EQYfpWRuWiLut4maVFr0gAtvSgStCLlCnMxa092J/F6rJnZTUq0KPaiNC1UFeIijUoJUQ+BBlokhICqog8z3QBX8Aj8M+N47WwSDomUxDP/8fv+wyw6bySJ2+0Qx3MmRcBpIpEgspNM+TFtJ4xLdL6F5UVJ2miGszbyHbe+c6PtfMeP/ThgsZAogHvxJpYYnUXv+zFCi/oPQm0iBG4SD4y3v90Y3PlSpY9Vf131n6n+ssruqf4PKvtepZsqXVPpp2op3b77YPuLFVAbG99efaDST8bOmP+Px17ZXsuM5sdwq5X196rKrql0GW7+fLbuO8dt2I4g3NvJAaEYt00KKvtR9VdU9rBQRAh3sWT8YhuyfI9HWqslZSK8el1LMHcpx7EbUcyxyztxPek0IhrUxzR6bd/LPVExTaIZD0neIfmVURUtoMVEP3lqsLI8uH4zD24NR3lS6Tcq3VDZdcAMyH/7GrBuqiwb3N988fPK4P6WZQv9tf7ZjqsDAP+isqcq++7wgMf3AzyDI7EP4okT/xIx1P65Sn9V6R2VfQ7I1q6hvPxPjBAAbw3WgQhQuafSh6YH4HtVpetqKctb5BGQNriVDW58ZSxuGpU1kP8zTc9VtqX6t1T20+GZmvgfTI2f3o+pEk8vni7/vgnwzbAswSzcVZmdgiejQ3Ljj43bhibgSNMArN7u5+4rNOw/HIcbDYthZCx2AS/PhLb4wI8n63YbwR6CAyybJAJlOCE0GdIuCiIsxFnfMTunJuTVCFaREYNCsbK6tRnGcy1E4+GG8h2QNWgc5kI4163zOniHr8l6KSYcTQQkApaQEG7cUty8RJg3aeyhcU7arwKMXTpT6GX0EfyWdGuSJR4aK/QBsladco47EgLFM7TpzgoWw2o2VpApayc0IvxSIilsXN8p6uc7OIrY/FvmrrR9NDoSzO1xPysW9J3vXOYEOqEL9BUyKGuTACdafGH6HbIA34WwzcKOJvsA4btEsKijc7Rq5zpxCGmX9Ey2F80DQ+PmFXFhQZJY7IDSiQ67x3fgnTl/APRhuhPuSWMHfAKL5Xdqj/fNPloJZ4mAByskMzQml/XpaHXmpiWHHEszc6kxSwJZ6exzjEUEx6PNXRj3jg0fyhbWfJyHOZl720aBBI4eQ2enLKgYd2lTj50bRDRpMMxDd55TSa4A20dNxm6eHni1rXPgtHDIDjq90ZFS16QyPTXw2x7OTmW4WCwxsAKVQ97O5eIRAZCPeJY51zLQKxzscmGXREkKctpuIk/wAMTWh6bVrS4aHRFHsqqit1QxqcZVPq3DwOU4LYJDwks3u3Kz7qYWF8tI0GvoiEphfT6CZ6VAWYTv9aoxR5xKKFFtARq08Fvqh1HryfpIlpO2TIXHvNIA/HVoh2AOrkYbqMIwvBp57Ny2Bz0yjGj970ni8Pu/LELTQsgt2sV2cUgF2F2FJy8iC7DiEGriysJzdSNZXa1SCymHuYLx9qBh52ucdAkXJNe1jYR071S9NyIWzBn38zSULQ+dPJHYcC1Cmy1ZumjgYK7JGWyjWsAiBqP80sTEhBUxDlWocRzSjvDQGfgxRhDaFmg/TDiizdgQAGYBiSXhQ6zuKQu2WPkNBtS3tWCHhNy7aa6cC6CxNp/n3mBRWFXMG6ykK+iHsGnGLErNVV51qxJ0uNBQE0aL5CxaD8Us1vzuyQwhVpTgMIQVVhRuhKvTObsmMUOHhwTUSlaz8VoM6mlz2iNcGOY4Sw9h729iBqTx)

</div>

---

# コンポーネントの構成

親コンポーネントから子コンポーネントが参照されツリー構造になる。最上位はルートコンポーネント（App.vue）

<img src="/components.png" alt="コンポーネントの基本と構成" style="height: 60%; width: auto" />

Vue アプリは必ず、Vue コンポーネントのツリー構造で構成される

---

# コンポーネントの構成

Vue コンポーネントは .vue ファイル（Single File Component：単一ファイルコンポーネント）と1対1対応する

<div class="flex gap-4 mb-4 items-center">

```vue
<script>
// ここに JavaScript を書く
</script>

<template>
  <!-- ここに Vue テンプレートを書く -->
</template>

<style>
/* ここに CSS を書く */
</style>
```

- script / template / style 要素はどの順番でも書いても同じ結果になる
- script / template（トップレベル）要素は最大1つまで書ける
- style 要素は2つ以上書ける（あまりやることはない）
- `<script setup>` `<style scoped>` のように属性をつけることがある
- .vue ファイルに複数のコンポーネントを定義することはできない[^proposal-9852]

</div>

- 興味ある人向け：[SFC 構文仕様](https://ja.vuejs.org/api/sfc-spec.html)
- 興味ある人向け：[SFC CSS 機能](https://ja.vuejs.org/api/sfc-css-features.html)

[^proposal-9852]: [Proposal: Multiple components in .vue files · Issue #9852 · vuejs/vue](https://github.com/vuejs/vue/issues/9852)

---

# プロパティを用いた子コンポーネントへのデータの受け渡し

親コンポーネントから子コンポーネントに 文字列 を渡してみる

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

```vue
<script setup>
import ChildComponent from "./ChildComponent.vue";
</script>

<template>
  <ChildComponent title="Hello!" />
</template>
```

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

```vue
<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
});
const message = ref(props.title);
</script>

<template>
  <p>{{ message }}</p>
</template>
```

</div>

</div>

https://play.vuejs.org/ で書いてみよう

---

# プロパティを用いた子コンポーネントへのデータの受け渡し

数値を渡す場合、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

```vue {all|6|all}
<script setup>
import ChildComponent from "./ChildComponent.vue";
</script>

<template>
  <ChildComponent :count="14" />
</template>
```

<p class="text-xs">静的な値ですが、これが文字列ではなく JavaScript の式だとVueに伝えるためにはv-bind を使う必要があります</p>

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

```vue
<script setup>
import { ref } from "vue";

const props = defineProps({
  count: Number,
});
const message = ref(props.count);
</script>

<template>
  <p>{{ message }}</p>
</template>
```

</div>

</div>

<arrow v-click="1" x1="400" y1="340" x2="210" y2="300" color="#564" width="3" arrowSize="1" />

https://play.vuejs.org/ で書いてみよう

---

# プロパティを用いた子コンポーネントへのデータの受け渡し

真偽値（true / false）を渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

```vue {all|6|all}
<script setup>
import ChildComponent from "./ChildComponent.vue";
</script>

<template>
  <ChildComponent :is-show="false" />
</template>
```

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

```vue
<script setup>
import { ref } from "vue";

const props = defineProps({
  isShow: Boolean,
});
const show = ref(props.isShow);
</script>

<template>
  <p v-if="show">props'is-show'がtrueであれば見れます</p>
</template>
```

</div>

</div>

<arrow v-click="1" x1="400" y1="400" x2="200" y2="300" color="#564" width="3" arrowSize="1" />

https://play.vuejs.org/ で書いてみよう

---

# プロパティを用いた子コンポーネントへのデータの受け渡し

props はデフォルト値を設定することもできる

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

```vue
<script setup>
import ChildComponent from "./ChildComponent.vue";
</script>

<template>
  <ChildComponent :is-show="false" />
</template>
```

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

```vue {all|5-8|all}
<script setup>
import { ref } from "vue";

const props = defineProps({
  isShow: {
    type: Boolean,
    default: true,
  },
});
const show = ref(props.isShow);
</script>

<template>
  <p v-if="show">props'is-show'がtrueであれば見れます</p>
</template>
```

</div>

</div>

https://play.vuejs.org/ で書いてみよう

---

# プロパティを用いた子コンポーネントへのデータの受け渡し

配列、オブジェクトを渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

```vue
<script setup>
import ChildComponent from "./ChildComponent.vue";
</script>

<template>
  <ChildComponent :student="{ name: 'taro', old: '16' }" />
</template>
```

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

```vue
<script setup>
import { ref } from "vue";

const props = defineProps({
  student: Object,
});
const user = ref(props.student);
</script>

<template>
  <p>こんにちは、{{ user.name }}さん、{{ user.old }}歳になりましたね</p>
</template>
```

</div>

</div>

https://play.vuejs.org/ で書いてみよう

---

# イベント購読を用いた親コンポーネントへのデータの受け渡し

子コンポーネントでイベントを発火させることによって可能

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">親コンポーネント - App.vue</p>

```vue
<script setup>
import ChildComponent from "./ChildComponent.vue";

function clicked(message) {
  alert(message);
}
</script>

<template>
  <ChildComponent @child-clicked="clicked" />
</template>
```

</div>

<div class="flex-shrink">

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

```vue
<script setup>
const emit = defineEmits(["child-clicked"]);
function clickHandler() {
  emit("child-clicked", "Hello!");
}
</script>

<template>
  <button @click="clickHandler">emit !</button>
</template>
```

</div>

<div class="flex-shrink-0">
<p class="text-xs">実行サンプル</p>
<EmitParent />
</div>

</div>

https://play.vuejs.org/ で書いてみよう

---

# プロパティとイベントを併用したデータの受け渡し

親と子で同じ値の読み書き（双方向バインディング）ができる。[サンプル](https://play.vuejs.org/#eNqFU01v00AQ/SurPblqFKuCU3CiQpRDOZQKEBeWg+uME7f22tpdp5EsS6SRuMChnBASEgcQIKTyp6wgfgaz6/ojH20Plrw7b968mZ2X0cdJ0p2lQHvUkZ4IEkUkqDQZMB5ESSwUyYgAn+TEF3FEGEUso4/q6HAahONhjAcOXFWgrr1+ryswyrgXc6lI4gq8G8YpJvQ1u3Wwh4zt4BH3BESasU+sPdIfkIxx0s7sztwwhf19TMyr3DQZuwoqYsvTP6807A4GBDa4ksyxy0ngDPCgIEpCpMUTcZJBi6BHsmytmTx3bD054pymSsWcHHph4J33Gd3oitHBvx+/i8VPsn/g2CXY5G2MsxfFYwiNtJrElGKUHJbdrkNaE0CIjZyO3WqAdqiSOCs/mHTPZMzx1c1UGPWwZhCCeJaoAGfJKDanIzrmhmF88dTcKZFCp7r3puCd77g/k3N9x+iJAAlihk9fx5QrJoDadHj04hjm+F8HsZU0RPQdwecg4zDVGkvYk5SPUXYLZ9Qeme0M+OSlHM0VcFk1pYVqZG7wZp31uG9rvZH7oPvQ5OGG4BS31/seA3XIhau86cj3wcNF2XTTze6LOJG4kGPwAw4n+mRlpHngHjlOo1MQJG/8Ypb3xkYmv9vgNcq2SbH8VCyvi+XHYvmuuPxWLP6s3n4vFr9WVx/+fvlaLD4Xl+8Zb+mzWpYz/LVVNitowzRaIAq0lFL+CA/Sel3tZGtPGX3T5AS7nd4qazxODLm1k63TRmvmHL/bTbztzloD+nJ1fbXtS218U8NYvhx5ZfZ1g+X/Aeur6N0=)も見てみましょう

<div class="flex gap-x-4">
<div>

<p class="text-xs">親コンポーネント</p>

```vue
<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";
const parentCount = ref(1);
const parentIncrement = () =>
  parentCount.value++;
};
const updateCount = (countValue) => {
  parentCount.value = countValue;
};
</script>
<template>
  <p>parentCount: {{ parentCount }}</p>
  <button @click="parentIncrement">親で +1</button>
  <ChildComponent :modelValue="parentCount" @update:modelValue="updateCount" />
</template>
```

https://play.vuejs.org/ で書いてみよう

</div>

<div>

<p class="text-xs">子コンポーネント（ChildComponent.vue）</p>

```vue
<script setup>
import { ref, watchEffect } from "vue";
const props = defineProps({ modelValue: Number });
const count = ref(props.modelValue);
// プロパティの値と同期する
watchEffect(() => {
  count.value = props.modelValue;
});
const emit = defineEmits(["update:modelValue"]);
const increment = () => {
  count.value++;
  emit("update:modelValue", count.value);
};
</script>
<template>
  <button @click="increment">子で +1</button>
  <p>count: {{ count }}</p>
</template>
```

</div>

</div>

---

# v-model ディレクティブと defineModel マクロを使ったデータの受け渡し

前のページと同じことが短く簡単に書ける。[サンプル](https://play.vuejs.org/#eNp9ks1uEzEQx19l5FOqlF1VcCqbCIh6KBIfAo6+LM4kdeu1LX+ESKs98AY8BUhIPBVC4jE69jbbTZP2sNJ65j/j/3h+LXttbbGJyM5Z5YWTNoDHEO2ca9lY4wK04HAFHaycaYAz0nL2csgurqRaLgwdNOqwExXlfjzdwBnXwmgfwNaOYgsTqWCWuk/OTqjjOHmphcMmdZzB5ARmc2i5hnFlsalVxOmUCjuuq7I3T7bpELCxqg5IJ6jsfFR1Dm27d3/XVWUaFqqvMQSj4ZVQUtzMOHtghLP5/5+//37/BdOzquzFue7BC2yeNWaJamiQr+EMShJX5cgZO2XB08wruS6uvdG0gTwjZ4KaSYXugw2S3oQzcp0yKVcrZb69zbHgIp7u4uIKxc2R+LXfphhnHx16dBtaw5ALtVsjeUvpi8/vcUv/Q5KmiIrUTyQ/oTcqJo+97E3US7I90mW3l5kUqddf/MU2oPa7oZLRpOyyPqOV3vGx0e/tPi9e5DpaPb3iIWpHYO7hEnfMLXElNb5Li5rcoyePQ5eLxrjRN+Jtj7ZDjIamBNC/Pz8OAUqE5isym73DHZX7wHS3ZEZHRw==)も見てみましょう

<div class="flex gap-x-4">
<div>

<p class="text-xs">親コンポーネント</p>

```vue
<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";
const parentCount = ref(1);
const parentIncrement = () => {
  parentCount.value++;
};
</script>
<template>
  <p>parentCount: {{ parentCount }}</p>
  <button @click="parentIncrement">親で +1</button>
  <ChildComponent v-model="parentCount" />
</template>
```

</div>

<div>

<p class="text-xs">子コンポーネント（ChildComponent.vue）</p>

```vue
<script setup>
const count = defineModel();
const increment = () => {
  count.value++;
};
</script>
<template>
  <button @click="increment">子で +1</button>
  <p>count: {{ count }}</p>
</template>
```

https://play.vuejs.org/ で書いてみよう

</div>

</div>

- v-model: `parentCount` の値を `modelValue` プロパティで渡して `update:modelValue` イベントで受け取る
- defineModel: `count` の値を `modelValue` プロパティで受け取って `update:modelValue` イベントで渡す
- 興味がある人向け：2つ以上の値を v-model と defineModel で受け渡ししたい！  
  →[複数の v-model のバインディング](https://ja.vuejs.org/guide/components/v-model#multiple-v-model-bindings)を読もう

---

# スロットによるコンテンツ配信

slot を使うと、HTML 要素のようにコンポーネントに子要素を渡すことができる

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">親コンポーネント - App.vue</p>

```vue
<template>
  <ChildComponent>Hello Component</ChildComponent>
</template>
```

</div>

<div class="flex-shrink">

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

```vue
<template>
  <div>
    <strong>ChildComponent: </strong>
    <slot></slot>
  </div>
</template>
```

</div>
</div>

<div class="text-xs">
<p class="text-xs">結果例</p>
<strong>ChildComponent: </strong>Hello Component
</div>

<div class="pt-2">

https://play.vuejs.org/ で書いてみよう

- 興味がある人向け：複数のスロットが開けたければ？→[名前付きスロット（公式ドキュメント）](https://ja.vuejs.org/guide/components/slots#named-slots)
- 興味がある人向け：スロットに子コンポーネントからデータを渡したければ？→[スコープ付きスロット（公式ドキュメント）](https://ja.vuejs.org/guide/components/slots#scoped-slots) ＆ [サンプル](https://play.vuejs.org/#eNqVVm1P21YU/itX3gc2CRIK65csjdRWlfbSrdXWb8ukprYJLo5t2Q4FoUjYLmkoQZTS17GN0TGgsIVK5QNsDH7MxXn51L+w517HjhMIUiWE7j3nOec85+Sccz0jXDWMxGRRFlJC2hJNxbCJJdtFI5PVlIKhmza5bepSUbRvKpZNxky9QAYSyZiMGQ98kdXSycAchrjYcsFQc7aMGyFpSZnkBxzHL2X852V/xaHeDnUPqVdJJyFjRlxvZE4PFprbr6hTG2ls11rrv+HUXN9ubPxD3af1hTnq/EGdTeo8pO4Cdd9TD3+/Uu+Ieov8XKHOHnXeUmeduvPUdcndGNm7hDrbzNYpt1m4T08PZpubW9R5zRw6a9R1ELGPZw6bddNJIwOmIa1D6p5Qd4N6u9Sp+nMIsNRynvMwx8zAqVJnhTuNI2v16iO/9jMYGKZuWHBeP1jn8BoPhCx24InOOpaq2xB9eefbm6wGDPWyUwOW0Ap1F1nsDdjhsNOYP/SP9yO+YXhkUKbObp/kdv090GWe2wFDXJn/R7AgNhjCHaJugVtzEySr/t9P+jjtThoeqnvUfexXwGOZsw9coUIBdV6woMJRT4yPZKJuCWqOnhnp6Itqu7twjnfr5BBL5EpWmCEKGpKUskIEBFRVYjfcLdvUtXxmJkAntFxBJqUS+jqQkyESqiQ56HVF14Agn4Zyw1REZuOXy5/FAiVjkdLx2QmHIskziGXrvmMJex715s9J+OPSxPARUc1ZFhB5U5GGGKgLwoKOns0bsi6MEUG68w9+qy5gby1jhYnq2W2WTnaWxNkqRXLeCuthcdjuYGWJ4vbvwy3qPWIStKJT85de+MdodIxYMPXL2BjNTTb+jVVM31596cnp8SofBrQ35ri7S92FD0eV1os3/onHvFXKrdU3H47me/q2uzODhquvPWv+u1af3UoRv/InW22dqFX/ZK65ie2D5YCoWHNYRnDKZ6zfdLWH8yX1/uKqCmbM35ivr2L6kRsYv7v1TVcHBkT88qJfedt4tv2RXPpXeC8MCzzqtnX63wncRxXrmYKo48MfPp2MvRm4Wva0yo6JqGfJDMPf001JNlPkkjFFLF1VJPKJKIp4gAgxcpKkaHnoho0pLinkzLyipcjl9l1SLISYThFFUxVNHrqn6uIE1zxQJHs8RUaGQ1NbnrKHcqqSh7koa7ZsQlzi7xxnJgwKtiXq2piST9y3dA0PKOeXFUS9YCiqbN7iA2JlhVTAnOlyqqo/+JrLbLMoD4ZycVwWJ86R37emmCwr3DZlSzYn5awQ6WwkJ9uB+sYP34FvTFnA+KhAX6D8Xkb9ioxjALtW1CTQjuE426/4ZwDqese6MWXLmhUmxYgyZInjswI+BK5fkHqH7mjic26HeqKKPd8S53yIoMpYc3glGc4iV8iPzByrRcJPPUjYwkqRgeBBvzowSGLrCfLG/u/11/use1lbPuzA+FJizTI83M4hcDnS4/LaGZet3VeQN9+j03c6mLY/tFC3v9Eef9fP+GMTxV635frjXxrHGxhFhgn5XWb+stpPF35jsfcLrwAegzHdxKbnA6NoUdWyAkkxWVvFrhPydPuWUCQIkt1TKJT+BzLckwU=)を見てみましょう

</div>

---

# おさらい演習タイム

お疲れ様でした！コンポーネントへの値に渡し方について理解できましたか？
ここでもいくつか演習を用意したので、学んだ方法が自分で使えるか確認してみましょう。

0. [自由に試してみる](https://play.vue.js.org/)
1. [呼び出したコンポーネントの文字列の並びが別々に反転されるようにする](https://play.vuejs.org/#eNq1VVtP1EAU/ivjxMQlwd0HfVoL8RISNfESNfHB8WHtDlDotk07u2I2TZhWbgpBSASNIiJECAg+4ANRLj9mWC7/wjPTbndZ7iYSAp0z58z5znduZXzDcdKlIsVZrHm6azgMeZQVnVZiGQXHdhkqI5e2Ix+1u3YBEQy6BF9Lbh/REnU9erPImG1VddKZA2L5fr3NPep5uQ56x8obeo7Zbs2s8SaxJJZuWx5DhUgBtUhQKYJvU9O0m9FT2zXzFwhuAlUtE8UBEcCB0YJj5hiFE0KaDAvBT+XdsOAfRLAqQvidEuG6CEfU96Dgw1cEnxN8UQRDgq+KXr4zMVBZnhR8ZXvtu5QE45XRkb0/3wT/KIK3Ivwsgi1pHIzvvFmXQr6wvda7MwHmS422fLhqC8JNqdwbKGiZCJtmmzFGzTTiL3SQ5WNgr1TGwPlqZeC3ensJgJcuF+w8NUU4IIJZEf4QwU8R9qvvCUCyvbEl+KAMIQD7frCpzA3tfPql7AHtqOBfBX8v+OsYUSaBVA8uzokIJ0W4LMKx2AWwsTajnppWkW4CICg28LLfN7K7sSJfDiAN0+ekV2ELFGkKiQ4hotJlRntYC8GXGksoi8rlGKHvXyIYZRLg4HJvZmF3DggbhshFMKpSvggBJ4yckwvBp1RQX9TflUYwx6auv28/XBB8/gyJDsZV3mYlrMO1WauvecFH/iG3WiauQO1ga2djgmMugcjrRScPnVWTQVdeBBuLJSxDw0HKZQqSzvX9pNQPzYFsrHTATfzSf1LWMnUTAo4ee2XSVpgh6j+xcDNmHsyedqMj3eXZFszJsnRBsG4XHMOk7gOHGTCbCIYwIy4JzsFUenlXyZhbpM1Vud5J9e4j5F1ej5QR/NClHnVLgC65Yzm3gwKl8rrt8X3IQt0l9HfRBO0TLh9RzzaLEmOkdrNo5QF2nZ5Ce0fNZsPqeOK19TBqedWgJFCp6St9tQBunRB6De6V9FVlRywfWDy0EY7YONGMd1zb8aCW8rTdsOhDeUqp52UFZtFj5gJKAOPLaR+Z0ILBaiZt8pR6RnBUoAQ/r2l25mT0t0xD7wb9VBNqaY2wqydgo1RtmiMcaek07TmmweASNkzajQJJNaW7bMOKhPJ9/5Td8yLqo+u69A11WIeE4NbjhqCWiezOVqpH7c/z8xx3SCPVJy/Wo+buoaY/NQT/L1Alr1A=)
2. [test-eventイベントを発火させる](https://play.vuejs.org/#eNqNU91qE0EUfpVhrlqo2Qu9qpuglV7ohYr2cm7W9CTdun/szMZIWHB2S4xYERQtIoJCldCiXuiFf/gyp6n6Fp6ZJJsUJXTZZWfO950z3/mZHr+YJLVOBnyVu7KZ+oliElSWNETkh0mcKtZjKbRYzlppHDLBiSv4+QrdAKnWMqXiaEqoOTObiWzZzTiSioUgpdcGVjchlwQXfLnCtrxoMwDjSvBSxwsyWGb1BuuJiE0da9ZMuP2Ta06f64x1k2LaKAiTwFNAO8ZckwajZ5IkFk9G+w+OX35G/QKLh6ifoh6iPkD9GO/pmWwsPmFJ7yssf2D5yK4H5IzFRywPsCzNYhJiePT97dEXWnz4Uw5Hgz7qQ0WBbOAd1P3j5/dH7/dGgz3Uu7/fDH/tf0P9DItd41wMiEAOqAl9Z1To1wbVO1a9M5bvztX4gol9BjoQqbrgs5oJzpxpyjYteg9PHKd/kuJV1utVXcjz8QmuM1c02kp1N4AGldX+RcRXuJLUpJbfrm3LOKJRsU0RvBmHiR9Aei1RPjVRcIo/LrjgXhDEd65Ym0ozWJnam1vQvP0f+7bsGpvg11OQkHZobipMeWkbKEcDr9+8Cl1aV2AYb2YBsReAN0DGQWY0jmlrmalbOsezai/bkfaj9oZc7yqI5DQpI9Qwc8u3d+DSgtRncs/Wzlk/mlSq4sl78c+NWzTIt6xbA8s+Fl9pGF1nYjlF+/K/jh+TWQ==)
3. [スロットコンテンツが渡されるようにする](https://play.vuejs.org/#eNqFUk1LxDAQ/SslZ9lF9KRFUPGgBxX1mMtS41rtJqVJdUUWTCt+oOJBVEQEBRFBVg96UBH/zLCrP8NJ9hvdtZQ2efNe5s1kNsloGGbWYkaGiCu9yA+VI5mKwxHK/UIoIuWMC/xzxlW/sxSJgkNJJtvCjJaSYcrdbE2OQtwoVgiDnGK4cxzXnObg05JB8gwpvleQfkB6ZNd7oB8qT5+gz0HfQfIGaRnS1OB18o79boM+rL7egD6F5NAwNSKouoCtpLfq++b+6/a9LkwOIMGMOybp7X718qWeVx+DvjYcvW29Z2vm3Zb3ejFYFegT0I/Vs91K+byyh/LOFNZV84C2piHgZttahFupNgI2gk20f8pJH1HSE3zJz2dWpOB4P5vmGEo8PMYPWDQTKl9wScmQYyMmlgsCsT5lMRXFrK+Be8vMW/0DX5FFg1EyGzHJojW8ymZM5aI8U7XwxPw0K+K6GSyIxThAdo/gHJMiiI3HGm0s5otou41n3U7aKfN5fkFOFBXjslGUMWqYJcunBAfNdLBb6S27A5lBq6O8hF3sHNVfY95lbP+9ntIPHgdZFw==)

---

# Vue の基本的な書き方はこれで以上！

おつかれさまでした

以下を学んできた

- リアクティブな値の作り方
- テンプレートの書き方
- コンポーネントの作り方

ここまでは Vue.js を読み書きするなら必ず知っている必要がある内容

引き続き知らない機能がコードに出てくるかもしれないが、学んだことと関連していると感じられたらそれでよい

学習の目安

- 理解していること
- 書けること

自信がない箇所は復習・質問しましょう！

---

# 次のステップは？

これから学ぶ内容の確認

- より具体的な題材でコードを読む・書く
  - データテーブル
    - これまでのおさらいとコンポーザブル
  - パスワードチェッカー
    - throttle-debounce によるイベント処理の間引き
  - ツクロアデザインラボの記事ビューアー
    - Fetch API による JSON データの取得
    - Vue Router による画面遷移
  - 靴のギャラリー
    - 画像の取得と表示
    - あらかじめ用意されたスタイルの適用
- Nuxt 3 を使う
  - Vue.js 単体を使う場合との違い
  - useFetch などの Nuxt 3 が提供するコンポーザブルの使い方

---

# データテーブル

[データテーブルの Vue SFC Playground](https://play.vuejs.org/#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) を開く

1. どんなアプリか：表にデータを流し込んでカラムで絞り込んだり並べ替えたりできる
2. Vue特有な部分を中心にコードを理解する
   - どうやって絞り込んでいるのか
   - どうやって並べ替えているのか
   - どうやって絞り込んだり並べ替えたものを表示しているのか
   - どうやってコンポーザブルに値を渡しているのか
3. 講師と一緒にハンズオン（何をするのか分かったら講師を待たずにすすめてOK）
   - 列を追加してみる
   - 動的に行を追加できるようにしてみる

---

# コンポーザブル

コンポーザブルとは？

> Vue アプリケーションの文脈で「コンポーザブル（composable）」とは、Vue の Composition API を活用して状態を持つロジックをカプセル化して再利用するための関数です。
>
> _[コンポーザブル | Vue.js](https://ja.vuejs.org/guide/reusability/composables) より引用_

<div class="mb-4" />

- コンポーザブル自体は純粋な JavaScript 関数
- コンポーザブルを書くファイルも JavaScript (拡張子 .js) ファイル
- 関数名は必ず use~ から始まる (どれがコンポーザブルか見分けやすくするため)
- リアクティビティ API (ref, computed, watch, ...) も使える
- Vue コンポーネントからロジック (振る舞いのためのコード) だけを別のファイルに分割できる

---

# コンポーザブルを使うときの注意

コンポーザブルの引数への値の渡しかたによっては**リアクティビティが失われてしまう（！）**

このうちいくつが `props.hoge` のリアクティビティを保って useComposable() に値を渡せるでしょうか…？

1. <v-click>NG: </v-click>`useComposable(props.hoge)`
2. <v-click>OK: </v-click>`const hoge = toRef(props, "hoge"); useComposable(hoge)`
3. <v-click>OK: </v-click>`const { hoge } = toRefs(props); useComposable(hoge)`
4. <v-click>NG: </v-click>`const hoge = ref(props.hoge); useComposable(hoge)`
5. <v-click>OK: </v-click>`useComposable(() => props.hoge)`

<v-click>

props や reactive() の値は **必ず Ref 型か[ゲッター関数](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/get#%E8%A7%A3%E8%AA%AC)にしてコンポーザブルに渡す**こと！

4\. は hoge のリアクティブな値が渡せているけど props.hoge と値は同期されない  
`ref(props.hoge)` で props.hoge とのリアクティビティが失われるため

</v-click>

<v-click>

コンポーザブルでは受け取った引数をどう参照すればいい？.valueつけないとだめ？→[toValue()](https://ja.vuejs.org/api/reactivity-utilities#tovalue)を使おう

興味がある人向け：[慣例とベストプラクティス](https://ja.vuejs.org/guide/reusability/composables.html#conventions-and-best-practices)を読もう！

</v-click>

---

# パスワードチェッカー

[StackBlitz](https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-password-checker?file=src/App.vue&terminal=dev)を開くか、handson-password-checkerディレクトリのアプリを起動する

1. どんなアプリか：パスワードの強度を判定できる
2. Vue特有な部分を中心にコードを理解する
   - どうやってパスワードの強度を判定しているのか
   - どうやってパスワードの強度を視覚化しているのか
3. 講師と一緒にハンズオン（何をするのか分かったら講師を待たずにすすめてOK）
   - [throttle-debounce](https://www.npmjs.com/package/throttle-debounce) の debounce を使ってパスワードを入力してから一定時間後にパスワードの強度を判定してみる
     - props.password を ref 値：propsPassword として取り出す
     - PasswordChecker内部で管理するリアクティブな値：passwordを定義する
     - 取り出した値を watch で監視する
     - watch のコールバック関数に debounce を使用する
     - props.password を参照している箇所を password.value に差し替える
   - [throttle-debounce](https://www.npmjs.com/package/throttle-debounce) の throttle を使ってパスワードを入力している際に一定間隔でパスワードの強度を判定してみる
     - debounce を使用している箇所を throttle に差し替える

---

# debounce や throttle がどういう時に必要なのか？

- [入力イベント](https://developer.mozilla.org/ja/docs/Web/API/InputEvent/data)や[スクロールイベント](https://developer.mozilla.org/ja/docs/Web/API/Element/scroll_event)など短時間で頻繁に発生するイベントに対応する処理を間引くときに使用する
  - 例：入力イベントのたびにバックエンドサーバーへのHTTPリクエストを送りたくないとき
  - 例：利用者が入力操作をひととおりおこなったと思われるタイミングまで待ちたいとき

---

# デザインラボの記事ビューアー

[StackBlitz](https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router?file=src/App.vue&terminal=dev)を開くか、handson-fetch-routerディレクトリのアプリを起動する

1. どんなアプリか：[デザインラボ](https://design-lab.tuqulore.com/)というサイトと同じ記事データ（JSON）を取得して一覧から選択表示できる
2. Vue特有な部分を中心にコードを理解する
   - App コンポーネントがなにをしているのか
   - PostList コンポーネントがなにをしているのか
3. 講師と一緒に Vue Router を導入しよう
   - ルートを定義
   - Vue プラグインとして Vue アプリケーションインスタンスに登録
   - 画面が切り替わるようコンポーネントへの差し替え
   - 画面遷移を捕捉できるコンポーネントへの差し替え
4. Vue特有な部分を中心にコードを理解する
   - Vue Router がなにをしているのか
   - PostDetail コンポーネントがなにをしているのか

---

# 靴のギャラリー

[StackBlitz](https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-gallery-shoes?file=src/App.vue&terminal=dev)を開くか、handson-gallery-shoesディレクトリのアプリを起動する

1. どんなアプリか：靴のデータ（JSON）を取得してショッピングサイトらしい見た目で一覧表示できる
2. JSON から靴のデータを取得しよう（10 分程度）
3. 取得した靴のデータをあらかじめ用意されたスタイルで表示しよう（20 分程度）

<img class="pt-2" src="/handson-gallery-shoes-finish.png" width="400">

---

# Nuxt 3 の特徴

https://nuxt.com/docs/getting-started/introduction#what-is-nuxt

効率的にモダンなウェブアプリケーション開発に必要なライブラリがあらかじめ含まれている（Nuxt 3 を導入すれば自分で別途導入する必要がない）

1. [Vue.js](https://vuejs.org/)： リアクティビティを備えたコンポーネント単位での UI の実装ができる
2. [Webpack](https://webpack.js.org/) と [Vite](https://vitejs.dev/)
   - 開発時ページの再読み込みなしでブラウザが実行するコードを差し替えてくれる
   - 本番環境での動作に必要なコードをバンドリング：まとめてくれる
3. [esbuild](https://esbuild.github.io/)：レガシーなブラウザーをサポートしつつも最新の JavaScript 文法が書ける
4. [h3](https://github.com/unjs/h3)：Nuxt 3 が提供するWebサーバーにあたるものを担当している
   - 開発サーバー：開発時に起動して動作確認できるサーバー
   - サーバーサイドレンダリング：Vueの描画結果（HTML/JS）をブラウザーではなくサーバーで用意する機能
   - API サーバー：ブラウザーから問い合わせて必要なデータを返すサーバー
5. [vue-router](https://router.vuejs.org/)：ルーティング（画面遷移処理）の実装ができる

---

# Nuxt 3 を使うと開発者にとってうれしいこと

1. Vue.js が導入済み：Nuxt を導入すれば Vue.js の導入が不要
2. Vue コンポーネント等の import を省略できる
3. pages ディレクトリに .vue ファイルを作成するだけで HTML ページができる：  
   ルート定義をコードとして書かなくてすむ
4. server ディレクトリにバックエンド側の処理が書ける：  
   API サーバーが必要なアプリも Nuxt 3 だけでつくることができる
5. Nuxt 3 は 2022 年 11 月にはじめて安定版がリリースされ、2023年10月に 3.8 がリリースされた：  
   安定版がリリースされる程度に安定しており、活発に開発されている

---

# Nuxt 3 のハンズオン

[StackBlitz](https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-nuxt-playground?file=app.vue&terminal=dev)を開くか、handson-nuxt-playgroundディレクトリのアプリを起動する

- ルートコンポーネント（app.vue ファイル）
- ルート定義（pages ディレクトリ）
- 画面遷移（NuxtLink コンポーネント）
- レイアウト定義（layouts ディレクトリ）
- データ配信（server ディレクトリ）
- データ取得（useFetch コンポーザブル）
- ロジック再利用（composables ディレクトリ）
- グローバルな状態管理（useState コンポーザブル）

---

# ルートコンポーネント（app.vue ファイル）

app.vue を開いて中身を確認する。  
app.vue を削除する。

Vue アプリのルートコンポーネントのファイル名は慣習的に App.vue が多いが、Nuxt では app.vue がルートコンポーネントと決められている。ルーティングをおこなう場合、`<NuxtPage />` コンポーネントを挿入する。（Vue Router 導入時に出てきた `<RouterView />` コンポーネントと同じ）

```vue
<template>
  <div>
    <header>共通レイアウト</header>
    <NuxtPage />
  </div>
</template>
```

`<NuxtPage />` コンポーネントの外側は共通レイアウト（画面遷移しても見た目が変わらない部分）になる。ページごとに共通レイアウトを切り替えたい場合は、後述する layouts を使う必要がある。

そもそも共通レイアウトが不要なのであれば、 app.vue を削除することもできる。（この場合、ルートコンポーネントが消えるわけではなく、Nuxt 3 によって隠蔽される。）

---

# ルート定義（pages ディレクトリ）

pages ディレクトリに `pages/index.vue`, `pages/about.vue` ファイルを配置し、複数ページを構成する。

Nuxt では Vue コンポーネントを pages ディレクトリに配置するだけで、ルートを定義することができる。つまり、 Vue Router を導入したときのように手動でルートを定義する必要がない。

```
└── pages
    ├── about.vue // -> `/about` ページ
    └── index.vue // -> `/` ページ
```

---

# 画面遷移（NuxtLink コンポーネント）

コンポーネントで Nav.vue を作成、index と about のリンクナビゲーションを作成する。

ルートを移動する際は HTML 要素の

```html
<a href="/about">ABOUT</a>
```

ではなく

```vue
<NuxtLink to="/about">ABOUT</NuxtLink>
```

と NuxtLink コンポーネントを呼び出してリンクを作成する。  
ルート外、例えば外部サイトのリンクを貼る場合は従来の`<a>`要素を使うことになる。

なぜ NuxtLink コンポーネントと`a`要素の使い分けが必要なのか：

- NuxtLink（Vue Router）はページの一部を更新（ソフトナビゲーション）して  
  少ない通信量と表示コストで画面遷移してくれる
- じゃあ`<a>`要素は何をするの？→ページ全体を取得・表示する（ハードナビゲーション）
  - イベントも発生する：[ページのライフサイクル: DOMContentLoaded, load, beforeunload, unload](https://ja.javascript.info/onload-ondomcontentloaded)

---

# レイアウト定義（デフォルトレイアウト）

`layouts/default.vue`を作成し、`<Nav />` を表示させる。

<div class="flex gap-8">

<div>

`app.vue`で共通レイアウトを組む例

```vue
<template>
  <div>
    <Nav />
    <NuxtPage />
  </div>
</template>
```

</div>

<div>

`layouts/default.vue`で共通レイアウトを組む例

```vue
<template>
  <div>
    <Nav />
    <slot />
  </div>
</template>
```

</div>

</div>

同じ見た目になるけどなにがうれしいの？→ レイアウトが切り替えられるようになる

---

# レイアウト定義（名前付きレイアウト）

layouts 配下にデフォルト以外のレイアウトコンポーネントを用意し、ページコンポーネントごとに切り替えられることを確認する。

<div class="flex gap-8">
<div>

`layouts/other-layout.vue`に別の共通レイアウトを組む

```vue
<template>
  <div>
    <header>別の共通レイアウト</header>
    <slot />
  </div>
</template>
```

</div>
<div>

ページコンポーネントで other-layout レイアウトを参照する

```vue
<script setup>
definePageMeta({
  layout: "other-layout",
});
</script>

<template>
  <h1>CONTACT</h1>
</template>
```

</div>
</div>

---

# データ配信（server ディレクトリ）

`server/api`ディレクトリにある`users.js`が HTTP レスポンスを返していることを確認する

どこかに`<a href="/api/users">/api/users</a>`を書いてアクセスしてみると、`server/api/users.js` が return しているデータが HTTP レスポンスになっていることが分かる。

```json
[
  {
    "name": "北田 由宇",
    "email": "kitada_yuu@example.com",
    "pref": "東京都",
    "city": "府中市"
  },
  ...
]
```

Nuxt は server ディレクトリが [Nitro](https://nitro.build/) というサーバーフレームワークで動いており、HTTP リクエストハンドリング（HTTP リクエストを受け取ったらどう処理するか）や HTTP レスポンス処理を実装することができる。

---

# データ取得（useFetch コンポーザブル）

`server/api`ディレクトリにある`users.js`を確認して、`components/userList.vue`に以下を記述する。

```vue
<script setup>
const { data: users } = await useFetch("/api/users");
</script>

<template>
  <div>
    <ul>
      <li v-for="user in users">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>
```

useFetch コンポーザブルを使うと、便利に HTTP リクエスト・レスポンスを取り扱うことができる。

---

# ロジック再利用（composables ディレクトリ）

`composables/useCounter.js`を作成する。  
アプリで再利用したいロジックを管理することができる。js ファイルではあるが、Vue コンポーネントで使ってきた関数を使用していることがわかる。

```js
export default () => {
  const count = ref(0);
  const increment = () => count.value++;

  return {
    count: readonly(count),
    increment,
  };
};
```

---

# ロジック再利用（composables ディレクトリ）

作成した useCounter コンポーザブルを使用する。

```vue
<script setup>
const counter = useCounter();
function increment() {
  counter.increment();
}
</script>

<template>
  <div>
    <p>カウント: {{ counter.count }}</p>
    <p><button @click="increment">increment!</button></p>
  </div>
</template>
```

- 数を数えるロジックがコンポーザブルにすることで再利用可能になった。
- しかし、画面遷移すると数がリセットされる。
- ref 関数などのリアクティビティ API の値は、Vue コンポーネントが初期化～マウントされている間で保持される。  
   （参考：[ライフサイクルダイアグラム](https://ja.vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram)）
  <arrow v-click="1" x1="400" y1="270" x2="220" y2="170" color="#564" width="3" arrowSize="1" />

---

# グローバルな状態管理（useState コンポーザブル）

useCounter コンポーザブルの ref 関数を useState コンポーザブルに変更して比較する。

```js {all|2}
export default () => {
  const count = useState("counter", () => 0);
  const increment = () => count.value++;

  return {
    count: readonly(count),
    increment,
  };
};
```

- useState コンポーザブルは複数 Vue コンポーネントをまたいで（≒グローバルに）同じ値を読み書きできる。
- 公式ドキュメント：[useState · Nuxt Composables](https://nuxt.com/docs/api/composables/use-state)
- Nuxt が提供する便利なコンポーザブルがたくさんあるので、興味があったら https://nuxt.com/docs/api を参照のこと

---

# Vue + Vue Router と Nuxt 3 の比較

[StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router-nuxt-finish?file=src/App.vue&terminal=dev)を開くか、handson-fetch-router-nuxt-finishディレクトリのアプリを起動する

デザインラボの記事ビューアーを Nuxt 3 でつくりなおしたもの (動作は Vue 3 のものと同じ)

---

# Vue + Vue Router と Nuxt 3 の比較（ルーティング）

ルーティングの設定方法が異なる

<div class="flex gap-8">

<div>

<p class="text-xs">Vue 3</p>

1. Vue Router をプラグインとしてインストール
2. ルートを定義する
3. RouterView コンポーネントを使う

</div>

<div>

<p class="text-xs">Nuxt 3</p>

<div class="h-xs overflow-y-auto">

1. 導入済みなので設定不要
2. ファイル・ディレクトリ構成で定義できる（ファイルベースルーティング）
3. app.vue は NuxtPage コンポーネントが必要だが app.vue 自体存在しなければ設定不要 https://nuxt.com/docs/guide/directory-structure/app

```
pages/
├── index.vue // この場合のパスは `/` となり index はパスから省略可能
└── posts // ディレクトリがそのままURLのパスに含まれる
    └── [id].vue // URLパラメーターは[]で囲む
```

</div>

</div>

</div>

---

# Vue + Vue Router と Nuxt 3 の比較（ルーティング）

Vue 3 はテンプレートの最上位に複数要素が書ける

例：

```vue
<template>
  <div />
  <p />
</template>
```

しかし、Nuxt 3 の pages ディレクトリに配置する Vue コンポーネントに限っては、Nuxt 3 の制約としてテンプレートの最上位はひとつまでの要素しか書けない

> Pages must have a single root element to allow route transitions between pages. (HTML comments are considered elements as well.)

https://nuxt.com/docs/guide/directory-structure/pages

---

# Vue + Vue Router と Nuxt 3 の比較（自動インポート）

<div class="flex gap-8">

<div>

<p class="text-xs">Vue 3 - components/PostList.vue</p>

```vue
<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const posts = ref(null);
（後略）
```

</div>

<div>

<p class="text-xs">Nuxt 3 - pages/index.vue</p>

```vue
<script setup>
const { data: posts, pending } = await useFetch(
（後略）
```

インポート、コンポーネントを利用するためのコードが省略でき記述量が減らせる

</div>

</div>

---

# Vue + Vue Router と Nuxt 3 の比較（自動インポート）

https://nuxt.com/docs/guide/concepts/auto-imports

以下はインポート不要

- Nuxt 3 が提供する関数、コンポーネント（useFetch、$fetch、NuxtLink など）
- 今まで使ってきた Composition API 関連の関数（ref、computed など）
- components ディレクトリに配置された Vue コンポーネント
- composables ディレクトリに配置されたコンポーザブル

---

# Vue + Vue Router と Nuxt 3 の比較（データ取得）

<div class="flex gap-8">

<div>

<p class="text-xs">Vue 3 - components/PostList.vue</p>

```vue
<script setup>
（中略）
const posts = ref(null);
const load = async () => {
  const response = await fetch("/wp-json/wp/v2/posts.json");
  posts.value = await response.json();
（後略）
```

</div>

<div>

<p class="text-xs">Nuxt 3 - pages/index.vue</p>

<div class="h-xs overflow-y-auto">

```vue
<script setup>
（中略）
const { data: posts, pending } = await useFetch(
  "http://localhost:3000/wp-json/wp/v2/posts.json"
);
（後略）
```

- リアクティブな値を別途用意する必要がない
- [Response.json()](https://developer.mozilla.org/ja/docs/Web/API/Response/json)が暗黙的に実行されオブジェクトが得られる
- データ再取得の関数、取得中の状態値などあると便利なものが用意されている https://nuxt.com/docs/getting-started/data-fetching

</div>

</div>

</div>

---

# Vue + Vue Router と Nuxt 3 の比較（データ取得）

https://nuxt.com/docs/getting-started/data-fetching

useFetch 以外もある

useLazyFetch: 非同期関数でない代わりにデータ取得前は `null` が入る

```js
const { pending, data: posts } = useLazyFetch("/api/posts");
```

useAsyncData: 例としては useFetch と同じことをやっている。（useFetch が使えないケースで）非同期処理によってデータを取得したい際に使う

```js
const { data } = await useAsyncData("count", () => $fetch("/api/count"));
```

useLazyAsyncData: useLazyFetch の useAsyncData 版

```js
const { pending, data: count } = useLazyAsyncData("count", () =>
  $fetch("/api/count"),
);
```

---

# Vue + Vue Router と Nuxt 3 の比較（データ取得）

便利だが素朴にFetch APIを使う場合と挙動が異なるので注意が必要

Nuxt 3におけるHTTP APIクライアントは、Fetch APIをラップ：Fetch API使用時便利な処理があらかじめ実装された [ofetch](https://github.com/unjs/ofetch) が使われている。以下重要な点や便利な点を挙げる

- useFetch は [\$fetch](https://nuxt.com/docs/api/utils/dollarfetch) を使用しており、\$fetch は ofetch と等価
- レスポンスボディが JSON 形式なら JS オブジェクトにしてくれる
- 2xx HTTP ステータスでないときエラーを投げてくれる

useFetchはサーバーサイドレンダリング（SSR）：データをあらかじめサーバーで取得してブラウザーにレスポンスとして返すとき、取得URLをパスのみ（例：`"/api/count"`）にすると Nuxt が管理するエンドポイント：末端、この場合URLかどうかチェックする。つまり取得先がpagesディレクトリやserverディレクトリで作成したページやAPIエンドポイントである必要がある。

useFetchをSSRで実行しない（serverオプションを`false`にする）こともできる。詳細は公式ドキュメントを参照のこと https://nuxt.com/docs/api/composables/use-fetch

fetchを使うこともできるが、Nuxt 3を使うならuseFetchや$fetchが便利。ただし、SSRの挙動が複雑で意図しない動作時エラーが生じることもあるので注意しよう

---

# VueUse

便利なコンポーザブルを提供しているライブラリ

- スクラッチ：あらゆる処理を自分で書くのは車輪の再発明かもしれない
- 既製のライブラリを使用することで効率的に開発することができる
- https://vueuse.org/functions.html をみてみよう

---

# スタイルガイド

Vue 固有の記法についての公式のスタイルガイド

- スタイルガイドに書いてあることを守らなくても、動く Vue のコードを書くことはできる
- スタイルガイドに書いてあることを守ると、事前に起こりうる問題に対処することができる
- [eslint-plugin-vue](https://eslint.vuejs.org/)を使うとスタイルガイドに違反しているか静的にコードを解析・修正できる

[スタイルガイド](https://ja.vuejs.org/style-guide/)

---

# ツールガイド

Vue の開発で役立ついろいろなツールをみてみよう

[ツールガイド](https://ja.vuejs.org/guide/scaling-up/tooling.html)

---

# Vue 3 と Nuxt 3 の説明はこれで以上！

おつかれさまでした

以下を学んできた

- リアクティブとは？
- コンポーネントとは？
- Vue の読み書き
- Nuxt の読み書き

Vue（とNuxt）でWebアプリケーションを作りたくなりましたか？

学習の目安

- 理解していること
- 書けること

自信がない箇所は復習・質問しましょう！

---

# 課題 - 付箋アプリをつくってみよう

[StacBlitz](https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-sticky?file=src/App.vue&terminal=dev)を開くか、handson-stickyディレクトリのアプリを起動する

<div class="text-xs">

マウスドラッグで付箋を動かし、文字を書き込み、色を変えるアプリです。さらに皆さんの追加したい機能を考えて自由につくり替えてみましょう。

<div class="grid grid-cols-2 items-center text-xs font-bold text-gray-500">
  <figure>
  <img src="/sticky-handson.png" class="w-80 mb-4" alt />
    <figcaption>どこからでも付箋の情報を扱える Composables を使う</figcaption>
  </figure>
  <figure>
  <img src="/fig-sticky-handson.png" class="w-80 border border-gray-200 mb-4" alt />
    <figcaption>
      handson-sticky ディレクトリのアプリを起動するとこんな画面が表示されます
    </figcaption>
  </figure>
</div>

</div>

---

# VueUse を使って付箋のドラッグ移動を実現

<div class="text-xs h-11/12">

<p>様々な Vue で使える便利なユーティリティがあります。</p>

<img src="/fig-vueuse.png" alt="VueUse" class="h-8/12" />

https://vueuse.org/

<p>
今回は <a target="_blank" rel="noopener noreferrer" href="https://vueuse.org/core/usedraggable/#usedraggable">useDraggable</a> を使います
</p>
</div>

---

# 構成を理解しよう

```
├── components/
│   └── StickyNote.vue （付箋単体の情報を格納したコンポーネント）
├── composables/
│   └── useStickies.js （付箋の状態などをアプリで管理する Composables）
├── pages/
│   └── index.vue （ページ）
├── app.vue （NuxtPageを使った基本レイアウト）
└── package.json （今回はuseDraggableが含まれている）

```

<div class="text-xs leading-5 my-4">

- `pages/index.vue` と `components/StickyNote.vue` は同じ `composables/useStickies.js` を参照していることがわかります
- `composables/useStickies.js` には、3 つの付箋の情報が配列で用意されています
- `composables/useStickies.js` は useState コンポーザブルを使用しており、付箋の情報が Vue コンポーネントをまたいで共有できます
- `composables/useStickies.js` には、`add()`と`update()`の関数が用意されていて、別々のコンポーネントから呼び出しが可能になっています

これで付箋の情報を一元管理できることがわかります。

</div>

---

# 機能を追加しよう

<p class="text-xs">先程の簡単なサンプルから以下のサンプルコードを選んで、機能を追加していきましょう。<br />まずは書き写してみるだけでも勉強になります。</p>

<div class="grid grid-cols-3 gap-6 text-xs">
  <figure>
    <img src="/fig-sticky-remove.png" class="p-1 border mb-2" alt />
    <figcaption>
      <a target="_blank" rel="noopener noreferrer" href="https://stackblitz.com/edit/nuxt-starter-a1jojw">削除ボタンの追加 →</a>
      </figcaption>
  </figure>

  <figure>
    <img src="/fig-sticky-photo.png" class="p-1 border mb-2" alt />
    <figcaption>
      <a target="_blank" rel="noopener noreferrer" href="https://stackblitz.com/edit/nuxt-starter-7qahec">付箋に画像を貼る →</a>
      </figcaption>
  </figure>

  <figure>
    <img src="/fig-sticky-add.png" class="p-1 border mb-2" alt />
    <figcaption>
      <a target="_blank" rel="noopener noreferrer" href="https://stackblitz.com/edit/nuxt-starter-ryc4pc">付箋の追加ボタンを新規コンポーネントで作成 →</a>
      </figcaption>
  </figure>
</div>

---

# 次はあなたのアイデアで！

例えば...

- 重ね順を変更させたい
- 文字の色、太さ、影など付けたい
- 動画を貼りたい
- カメラを起動させて撮影した写真を貼りたい
- スタンプを貼りたい

など、余裕ができたらあなたのアイデアを実現してみましょう。

ちょっとハードルは上がるかもしれませんが、どう実装するべきかは講師にも相談してみてください。
