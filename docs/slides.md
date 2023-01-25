---
# try also 'default' to start simple
theme: "default"
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
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
<img src="/logo.svg" alt="Vue" style="width: 100px;" class="inline" />
</div>

# Vue.js

---

# アジェンダ

- はじめに
  - Composition API, 学習環境など
- リアクティビティーの探求
  - ref, reactive, toRefs, readonly など
- 算出プロパティ（computed）
  - computed
- ウォッチャ（watch）
  - watch
- テンプレート構文の説明
  - mustache, v-bind, v-on, v-if/v-else/v-else-if, v-show, v-for, v-model など
- コンポーネント
  - props, emit, slot など
- Vue アプリケーション開発に必要な周辺ライブラリ
  - throttle-debounce, fetch, Vue Router など

---

# はじめに

## Vue.js とは？

Web アプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースの JavaScript フレームワーク。

<div class="pt-4 text-sm">

<a href="https://ja.vuejs.org/guide/introduction.html">
<carbon:arrow-right class="inline" /> 公式サイト
</a>
</div>

---

# 本講座のすすめかた

どのような形式で進行するのかの確認

ハンズオン ≒ コードを書いて動かすこと（1 回 10 分程度）をメインに取り組みます。

適宜説明を挟みますが、動かない、分からないとき、その他なんでも（大抵は他の受講者も同じことを考えています！）質問をお願いします。

---

# 準備

使用するツールの確認とセットアップ

本講座におけるハンズオン、演習、サンプルの閲覧は [StackBlitz](https://stackblitz.com/) でおこないます。

StackBlitz はブラウザ上で動作するオンライン IDE（統合開発環境）です。

以下をやってみましょう

1. 動作環境を[こちら](https://developer.stackblitz.com/docs/platform/browser-support/)で確認してブラウザを用意
2. 用意したブラウザで https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev にアクセス
3. `<template>Hello World!</template>` と書いてみる
4. 右カラムに `Hello World!` と表示されることを確認

講師は適宜あたらしいハンズオン環境をつくっていきますが、受講者の皆さんは作成したハンズオン環境を（全消しするなど）使いまわしてもらって大丈夫です。

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
    return {
      count,
      increment,
    };
  },
};
</script>
```

</div>
</div>

現状、Vue 関連の記事は Options API で解説されているほうが大多数であり、初学者の方は混乱されるかもしれません。Vue2, 3 どちらでも両 API は使えますが、本講座では今後主流となる Composition API を取り扱います。

---

# Composition API のメリット

Vue の機能ではなく、論理的な関心事でコードをまとめることができる

<img src="/apis.png" class="h-5/6" />

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
function increment() {
  count.value += 1;
}
</script>
```

</div>
</div>

現状 Vue では、簡潔なコードで表現するための支援機能として、シンタックスシュガー（糖衣構文）が提供されることがあります。HTML とも JS とも異なる構文への理解が求められる反面、記述量が減る、コードの複雑さが減るといったメリットがあるので、本講座では積極的に取り扱います。

---

# まずは書いてみる

<div class="flex gap-8">

```vue
<template>
  <div>
    {{ count }}
    <button @click="increment">+</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
function increment() {
  count.value += 1;
}
</script>
```

<div>
動作サンプル
<FirstSample />
</div>

</div>

---

# リアクティビティーの探求

<div class="flex gap-4">

<div>
<video controls loop style="height: 30vh" src="https://v3.ja.vuejs.org/images/reactivity-spreadsheet.mp4"></video>

<a href="https://ja.vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity">参考</a>

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

# リアクティビティーの探求

<div class="flex gap-4">

<div>

表計算ソフトと同じことをおこなうには

1. 値が読み込まれたときに追跡する。 例: val1 + val2 は val1 と val2 の両方を読み込む。
2. 値の変更を検知する。 例: val1 = 3 と入れるとき。
3. 最初に値を読み込んだコードを再実行する。 例: sum = val1 + val2 を再度実行して、 sum の値を更新する。

Vue には 1\. 2\. 3\. のためのしくみがある

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

# リアクティビティーの探求（ref によるリアクティブな値の参照）

`ref` を使った値を操作する場合、`setup` 関数内では `value` プロパティにアクセスする。
`template` 内では変数（定数）そのものを参照するだけで値を得られる。

<div class="flex gap-8">

```vue
<script setup>
import { ref, computed } from "vue";

const val1 = ref(2);
const val2 = ref(3);
const sum = computed(() => {
  return val1.value + val2.value;
});
</script>
```

```vue
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
    <p>sum: {{ sum }}</p>
  </div>
</template>
```

<ReactiveSample />

</div>

---

# リアクティビティーの探求（リアクティブな値をオブジェクトにまとめる）

リアクティブにしたいデータがオブジェクトの場合、`reactive` を使う

```vue
<template>
  <div>
    <input type="text" v-model="user.name" />
    {{ user.name }}
  </div>
</template>

<script setup>
import { reactive } from "vue";

const user = reactive({
  name: "",
});
</script>
```

---

# リアクティビティーの探求（オブジェクトにまとめたリアクティブな値を取り出す）

前項の `reactive` だと、分割代入しても値が取り出せない。Vue では `toRefs` を使うことで可能になる。

```vue
<template>
  <div>
    <input type="text" v-model="user.name" />
    <p>user.name: {{ user.name }}</p>
    <p>name: {{ name }}</p>
  </div>
</template>

<script setup>
import { reactive, toRefs } from "vue";

const user = reactive({
  name: "",
});
const { name } = toRefs(user);
</script>
```

---

# リアクティビティーの探求（リアクティブな値を読み込み専用にする）

```vue
<template>
  <div>
    <!-- user.name を変更しようとすると失敗し、警告が表示されます -->
    <input type="text" v-model="user.name" />
    <p>user.name: {{ user.name }}</p>
    <p>name: {{ name }}</p>
  </div>
</template>

<script setup>
import { reactive, toRefs, readonly } from "vue";

const user = readonly(
  reactive({
    name: "",
  })
);
const { name } = toRefs(user);
</script>
```

---

# 算出プロパティ（computed）

あるリアクティブな値を元に計算結果を返したい場合、`computed` 関数を利用する

```vue
<template>
  <div>
    <input type="number" v-model="count" />
    {{ plusOne }}
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const count = ref(1);
const plusOne = computed(() => count.value + 1);
</script>
```

---

# 算出プロパティ（computed）

`get` `set` 関数を用意することで書込み可能なオブジェクトを作成することができる

<div class="h-sm overflow-y-auto">

```vue
<template>
  <div>
    <input type="number" v-model="count" />
    <button @click="handleClick">リセット</button>
    {{ plusOne }}
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const count = ref(1);
const plusOne = computed({
  get: () => count.value + 1,
  set: (value) => {
    count.value = value;
  },
});
function handleClick() {
  plusOne.value = 1;
}
</script>
```

</div>

---

# computed と関数呼び出しの違い

関数呼び出しは都度呼び出される毎に実行するのに対し、`computed` 内で参照しているリアクティブな値が変更されない限り、`computed` は一度キャッシュされた結果を返す。
うまく使い分けるとパフォーマンスの向上に役立てる。

<div class="flex gap-4">

```vue
<template>
  <p>関数呼び出しの場合</p>
  <ol class="use-methods">
    <li>{{ randomMethods() }}</li>
    <li>{{ randomMethods() }}</li>
    <li>{{ randomMethods() }}</li>
  </ol>
  <p>computedを使った場合</p>
  <ol class="use-computed">
    <li>{{ randomComputed }}</li>
    <li>{{ randomComputed }}</li>
    <li>{{ randomComputed }}</li>
  </ol>
</template>
```

```vue
<script setup>
import { computed } from "vue";

const randomMethods = () => {
  return Math.random();
};
const randomComputed = computed(() => {
  return Math.random();
});
</script>
```

<div>
  <ComputedMethods />
</div>

</div>

---

# ウォッチャ（watch）

特定のデータを監視し、変更があったときに処理を行える、引数として、新しい値とその前の値を取得できる。

<div class="h-sm overflow-y-auto">

```vue
<template>
  <div>
    <input type="number" v-model="count" />
    {{ plusOne }}
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const count = ref(1);
const plusOne = computed({
  get: () => count.value + 1,
  set: (value) => {
    count.value = value;
  },
});
watch(count, (current, prev) => {
  console.log(current, prev);
});
</script>
```

</div>

---

# ウォッチャ（watch）

配列を監視する場合、複数のデータソースを同時に監視できる

<div class="h-sm overflow-y-auto">

```vue
<template>
  <div>
    <input type="number" v-model="count" />
    {{ plusOne }}
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const count = ref(1);
const plusOne = computed({
  get: () => count.value + 1,
  set: (value) => {
    count.value = value;
  },
});
watch([count, plusOne], (current, prev) => {
  console.log(current, prev);
});
</script>
```

</div>

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
<template>
  <div>Message: {{ msg }}</div>
</template>

<script setup>
const msg = "Hello!";
</script>
```

結果

```
Message: Hello!
```

---

# 展開（リアクティブな値を使うと）

<p class="text-sm">
counterを1秒ごとに増やしていく
</p>

```vue
<template>
  <div>Counter: {{ counter }}</div>
</template>

<script>
import { ref } from "vue";

const counter = ref(10);
setInterval(() => {
  counter.value += 1;
}, 1000);
</script>
```

結果

<div>
<CounterSample />
</div>

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
<template>
  <a v-bind:href="url"> Vue.js公式サイト </a>
</template>

<script setup>
const url = "https://ja.vuejs.org/";
</script>
```

省略するとこのように書ける

</div>

```html
<a :href="url"> Vue.js公式サイト </a>
```

---

# バインディング（クラスとスタイル）

クラス属性とスタイル属性のバインディングにはオブジェクト構文と配列構文がある

<div class="flex gap-6">

<div>

<p class="text-xs">オブジェクト構文</p>

```vue
<template>
  <span :class="{ red: red }">Hello World!</span>
</template>

<script setup>
import { ref } from "vue";

const red = ref(true);
</script>

<style>
.red {
  color: red;
}
</style>
```

</div>

<div>

<p class="text-xs">配列構文はこのように書ける</p>

```html
<span :class="[red]">Hello World!</span>
```

<p class="text-xs">組み合わせることもできる</p>

```html
<span :class="[red, { red }]">Hello World!</span>
```

<p class="text-xs">スタイル属性にもオブジェクト構文と配列構文がある</p>

```vue
<template>
  <span :style="{ color: 'red' }">Hello World!</span>
</template>
```

</div>

</div>

---

# イベントハンドリング

`v-on` ディレクティブは HTML 要素などの[イベント](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events)操作に使われる。`:`の後の引数でイベントの種類を指定できる

<div class="h-60 mb-6 overflow-y-auto">

```vue
<template>
  <div>
    <button v-on:click="counter += 1">Add 1</button>
    <p>clicked {{ counter }} times.</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
</script>
```

</div>

省略するとこのようにかける

```html
<button @click="counter += 1">Add 1</button>
```

---

# イベントハンドリング（関数名を属性値として使う）

関数を渡すと複雑な処理が書きやすい

```vue
<template>
  <div>
    <button @click="increment">Add 1</button>
    <p>clicked {{ counter }} times.</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
function increment() {
  counter.value += 1;
}
</script>
```

---

# 条件付きレンダリング

`v-if` あるいは `v-show` によって条件に応じてレンダリングする範囲を変更することができる。 `v-show` は見た目上非表示にするが `v-if` は DOM 要素も取り除く。

```vue {all|3|8|all}
<template>
  <div id="conditional-rendering">
    <span v-if="seen">Now you see me</span>
  </div>
</template>

<script setup>
const seen = true;
</script>
```

<arrow v-click="2" x1="350" y1="370" x2="190" y2="310" color="#564" width="3" arrowSize="1" />

---

# 条件付きレンダリング（v-if と v-show の使い分け）

<div class="mb-6">

|                | v-if | v-show |
| :------------- | :--- | :----- |
| 初期コスト     | 低い | 高い   |
| 切り替えコスト | 高い | 低い   |

</div>

- コンポーネントをマウントしてからあまり変化しないケースであれば `v-if`を使う
- コンポーネントをマウントしてから頻繁に変化するケースであれば `v-show`を使う

---

# 条件付きレンダリング

`v-if v-else v-else-if` でレンダリングの条件分岐ができる。 `template` 要素に対して使うことでグルーピングすることもできる。

<div class="flex gap-4">

```vue
<template>
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
</template>

<script setup>
const type = "A";
</script>
```

```vue
<template>
  <template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>
</template>

<script setup>
const ok = true;
</script>
```

</div>

---

# リストレンダリング

配列あるいはオブジェクトをもとに反復した要素の表示ができる。

<div class="flex gap-8">

```vue
<template>
  <div id="list-rendering">
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script setup>
const todos = [
  { text: "Learn JavaScript" },
  { text: "Learn Vue" },
  { text: "Build something awesome" },
];
</script>
```

  <div class="flex-shrink">
    <p>結果</p>
    <ol>
      <li>Learn JavaScript</li>
      <li>Learn Vue</li>
      <li>Build something awesome</li>
    </ol>

  </div>

</div>

---

# リストレンダリング（`key` 属性の付与）

要素の再利用と並び替えを考慮する場合、一意な値を `key` 属性に渡す必要がある。

<div class="flex gap-8">

```vue
<template>
  <div id="list-rendering">
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script setup>
const todos = [
  { text: "Learn JavaScript", id: 1 },
  { text: "Learn Vue", id: 2 },
  { text: "Build something awesome", id: 3 },
];
</script>
```

<div class="flex-shrink">
  <p>結果</p>
  <ol>
    <li>Learn JavaScript</li>
    <li>Learn Vue</li>
    <li>Build something awesome</li>
  </ol>
</div>

</div>

---

# リストレンダリング（添字による `key` 属性の付与）

識別子を用意していない場合、添字が得られるので代用すると便利。

<div class="flex gap-8">

```vue{all|4}
<template>
  <div id="list-rendering">
    <ol>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script setup>
const todos = [
  { text: "Learn JavaScript" },
  { text: "Learn Vue" },
  { text: "Build something awesome" },
];
</script>
```

<div class="flex-shrink w-110">
  <p>結果</p>
  <ol>
    <li>Learn JavaScript</li>
    <li>Learn Vue</li>
    <li>Build something awesome</li>
  </ol>

ただし、並び替えることが想定される場合意図しない挙動になる（どこにリストアイテムが移動したのか検知できない）ので注意

</div>

</div>

---

# フォーム入力バインディング

`v-model` によって form の input 要素や textarea 要素、select 要素の入力イベントに応じてデータを更新できるようになる。

<div class="flex gap-8">

```vue
<template>
  <div id="two-way-binding">
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("Hello Vue!");
</script>
```

<div>
  <TwoWayBindingSample/>
</div>

</div>

---

# コンポーネント

- コンポーネントの基本と構成
- プロパティを用いた子コンポーネントへのデータの受け渡し
- イベント購読を用いた親コンポーネントへのデータの受け渡し
- v-model を用いた親子間コンポーネントのデータの受け渡し
- v-model を用いない親子間コンポーネントのデータの受け渡し
- コンポーネントで v-model を使う
- スロットによるコンテンツ配信

---

# コンポーネントの基本と構成

親コンポーネントから子コンポーネントが参照されツリー構造になる。最上位はルートコンポーネント（App.vue）

<img src="/components.png" alt="コンポーネントの基本と構成" style="height: 80%; width: auto" />

---

# プロパティを用いた子コンポーネントへのデータの受け渡し

親コンポーネントから子コンポーネントに 文字列 を渡してみる

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

```vue
<template>
  <ChildComponent title="Hello!" />
</template>

<script setup>
import ChildComponent from "./components/ChildComponent.vue";
</script>
```

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

```vue
<template>
  <p>{{ message }}</p>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
});
const message = ref(props.title);
</script>
```

</div>

</div>

---

# プロパティを用いた子コンポーネントへのデータの受け渡し

数値を渡す場合、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

```vue {all|2|all}
<template>
  <ChildComponent :count="14" />
</template>

<script setup>
import ChildComponent from "./components/ChildComponent.vue";
</script>
```

<p class="text-xs">静的な値ですが、これが文字列ではなく JavaScript の式だとVueに伝えるためにはv-bind を使う必要があります</p>

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

```vue
<template>
  <p>{{ message }}</p>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  count: Number,
});
const message = ref(props.count);
</script>
```

</div>

</div>

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />

---

# プロパティを用いた子コンポーネントへのデータの受け渡し

真偽値（true / false）を渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

```vue {all|2|all}
<template>
  <ChildComponent :is-show="false" />
</template>

<script setup>
import ChildComponent from "./components/ChildComponent.vue";
</script>
```

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

```vue
<template>
  <p v-if="show">props'is-show'がtrueであれば見れます</p>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  isShow: Boolean,
});
const show = ref(props.isShow);
</script>
```

</div>

</div>

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />

---

# プロパティを用いた子コンポーネントへのデータの受け渡し

props はデフォルト値を設定することもできる

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

```vue
<template>
  <ChildComponent :is-show="false" />
</template>

<script setup>
import ChildComponent from "./components/ChildComponent.vue";
</script>
```

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

```vue {all|9-12|all}
<template>
  <p v-if="show">props'is-show'がtrueであれば見れます</p>
</template>

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
```

</div>

</div>

---

# プロパティを用いた子コンポーネントへのデータの受け渡し

配列、オブジェクトを渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

```vue
<template>
  <ChildComponent :student="{ name: 'taro', old: '16' }" />
</template>

<script setup>
import ChildComponent from "./components/ChildComponent.vue";
</script>
```

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

```vue
<template>
  <p>こんにちは、{{ user.name }}さん、{{ user.old }}歳になりましたね</p>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  student: Object,
});
const user = ref(props.student);
</script>
```

</div>

</div>

---

# イベント購読を用いた親コンポーネントへのデータの受け渡し

子コンポーネントでイベントを発火させることによって可能

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">親コンポーネント - App.vue</p>

```vue
<template>
  <ChildComponent @child-clicked="clicked" />
</template>

<script setup>
import ChildComponent from "./ChildComponent.vue";

function clicked(message) {
  alert(message);
}
</script>
```

</div>

<div class="flex-shrink">

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

```vue
<template>
  <button @click="clickHandler">emit !</button>
</template>

<script setup>
const emit = defineEmits(["child-clicked"]);
function clickHandler() {
  emit("child-clicked", "Hello!");
}
</script>
```

</div>

<div class="flex-shrink-0">
<p class="text-xs">実行サンプル</p>
<EmitParent />
</div>

</div>

---

# v-model を用いた親子間コンポーネントのデータの受け渡し

親子で同じ値になるようにバインディングする（コンポーネント間の双方向バインディング）

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">親コンポーネント - App.vue</p>

```vue
<template>
  <ChildComponent v-model="title" />
  <p>{{ title }}</p>
</template>

<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const title = ref("Hello !");
</script>
```

</div>

<div class="flex-shrink">

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

<div class="h-xs overflow-y-auto">

```vue
<template>
  <input v-model="title" />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);
const title = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
</script>
```

</div>

</div>

<div class="flex-shrink-0">
<p class="text-xs">実行サンプル</p>

<TwowayParent />

</div>

</div>

---

# v-model を用いない親子間コンポーネントのデータの受け渡し

親子で同じ値になるようにバインディングする（コンポーネント間の双方向バインディング）

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">親コンポーネント - App.vue</p>

```vue
<template>
  <ChildComponent @update:modelValue="title = $event" :modelValue="title" />
  <p>{{ title }}</p>
</template>

<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const title = ref("Hello !");
</script>
```

</div>

- v-model がおこなっていることは v-model を使わなくても実現可能（糖衣構文）
- 親 → 子：プロパティ
- 子 → 親：イベント
- このような状態が双方向バインディング（値を束縛しあっている）

</div>

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

---

# Vue の基本的な書き方はこれで以上！

おつかれさまでした

以下を学んできた

- リアクティブな値の作り方
- テンプレートの書き方
- コンポーネントの作り方

ここまでは Vue.js を使うなら必ず知っている必要がある内容

引き続き知らない機能がコードに出てくるかもしれないが、学んだことと関連していると感じられたらそれでよい

学習の目安

- 理解していること
- 書けること

自信がない箇所は復習・質問しましょう！

---

# 次のステップは？

これから学ぶ内容の確認

- より具体的な題材でコードを読む・書く
  - グリッドコンポーネント
    - これまで学んだ内容を組み合わせた少し複雑な実装
  - Markdown エディター
    - throttle-debounce によるイベント処理の間引き
  - ツクロアデザインラボの記事ビューアー
    - Fetch API による JSON データの取得
    - Vue Router による画面遷移
  - 靴のギャラリー
    - 画像の取得と表示
    - あらかじめ用意されたスタイルの適用
- Nuxt 3 を使う
  - Vue.js 単体を使う場合との違い
  - useFetch などの Nuxt 3 特有のヘルパー関数の使い方

---

# グリッドコンポーネント

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev

1. どんなアプリか：表にデータを流し込んでカラムで並べ替えできる
2. コードの説明
3. 行を追加できるようにしよう（20 分程度）

---

# イベント処理の間引き

throttle, debounce を使うとイベントハンドリング関数の呼び出し頻度を間引くことができる

<div class="flex gap-8">

<div class="flex-shrink">

```vue
<script setup>
import { debounce } from "throttle-debounce";
import { ref } from "vue";

const message = ref("");
const originalFruits = [
  "orange",
  "banana",
  "strawberry",
  "grape",
  "watermelon",
];
const fruits = ref(originalFruits);
function filterFruits() {
  fruits.value = originalFruits.filter(
    (fruit) => fruit.indexOf(message.value) >= 0
  );
}
</script>
```

</div>

<div class="flex-shrink">

```vue
<template>
  <input type="text" v-model="message" @input="filterFruits" />
  <ul>
    <li v-for="(fruit, index) in fruits" :key="index">
      {{ fruit }}
    </li>
  </ul>
</template>
```

次のように書き換えると…？

```js
const filterFruits = debounce(1000, () => {
  fruits.value = originalFruits.filter(
    (fruit) => fruit.indexOf(message.value) >= 0
  );
});
```

</div>
</div>

---

# Markdown エディター

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev

1. どんなアプリか：左カラムに Markdown 記法でテキストを入力すると右カラムに対応する見た目が表示できる
2. コードの説明
3. 右カラムの見た目が変わる頻度を throttle-debounce で間引いてみよう（20 分程度）

---

# デザインラボの記事ビューアー

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router?file=src/App.vue&terminal=dev

1. どんなアプリか：[デザインラボ](https://design-lab.tuqulore.com/)というサイトと同じ記事データ（JSON）を取得して一覧から選択表示できる
2. コードの説明（App コンポーネント、PostList コンポーネント）
3. Vue Router を導入しよう（20 分程度）
   - Vue プラグインとして Vue アプリケーションインスタンスに登録
   - 画面が切り替わるようコンポーネントへの差し替え
   - 画面遷移を補足できるコンポーネントへの差し替え
4. コードの説明（PostDetail コンポーネント）

---

# 靴のギャラリー

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-gallery-shoes?file=src/App.vue&terminal=dev

1. どんなアプリか：靴のデータ（JSON）を取得してショッピングサイトらしい見た目で一覧表示できる
2. JSON から靴のデータを取得しよう（10 分程度）
3. 取得した靴のデータをあらかじめ用意されたスタイルで表示しよう（20 分程度）

<img class="pt-2" src="/handson-gallery-shoes-finish.png" width="400">

---

# Nuxt 3

https://nuxt.com/docs/getting-started/introduction#what-is-nuxt

効率的にモダンなウェブアプリケーション開発に必要なライブラリがあらかじめ含まれている（Nuxt 3 を導入すれば自分で別途導入する必要がない）

1. リアクティビティと Web コンポーネントの提供：[Vue.js](https://vuejs.org/)
2. 開発環境での HMR（ページの再読み込みなしで ES モジュールを差し替えたりする）のサポート、本番環境でのコードのバンドリング：[webpack 5](https://webpack.js.org/) と [Vite](https://vitejs.dev/)
3. レガシーなブラウザーをサポートしながら最新の JavaScript 文法が書ける：[esbuild](https://esbuild.github.io/)
4. 開発サーバー、サーバーサイドレンダリング、API サーバーの提供：[h3](https://github.com/unjs/h3)
5. ルーティング（画面遷移処理）：[vue-router](https://router.vuejs.org/)

---

# Nuxt 3

- Vue.js が導入済み（Nuxt を導入すれば Vue.js の導入が不要）
- Vue コンポーネント等の import を省略できる
- pages ディレクトリに .vue ファイルを作成するだけで HTML ページができる（ルーティングの自動生成）
- server ディレクトリにサーバー側の処理が書ける（API エンドポイントの生成）
- Nuxt 3 は 2022 年 11 月に安定版がリリースされた

---

# Nuxt 3 のハンズオン

- app.vue
- pages
- NuxtLink
- layouts
- Data Fetching / server ディレクトリ
- composables

---

# app.vue

app.vue を開いて中身を確認する。  
app.vue を削除する。

Vue 開発環境では App.vue ファイルをルートコンポーネントとして取り扱うことが多いが、Nuxt では app.vue がルートコンポーネントと決められている。ルーティングをおこなう場合、`<NuxtPage />` コンポーネントを挿入する。（Vue Router 導入時に出てきた `<RouterView />` コンポーネントと同じ）

```vue
<template>
  <div>
    <header>共通レイアウト</header>
    <NuxtPage />
  </div>
</template>
```

`<NuxtPage />` コンポーネントの外側は共通レイアウト（画面遷移しても見た目が変わらない部分）になる。ページごとに共通レイアウトを切り替えたい場合は、後述する layouts を使う必要がある。

そもそも共通レイアウトが不要なのであれば、 app.vue を削除することもできる。（この場合、ルートコンポーネントが消えるわけではなく、Nuxt 3によって隠蔽される。）

---

# pages

pages ディレクトリに `pages/index.vue`, `pages/about.vue` ファイルを配置し、複数ページを構成する。

Nuxt ではページを作成するだけでルートを定義することができる。つまり、 Vue Router を導入したときのように手動でルートを定義する必要がない。



---

# NuxtLink

コンポーネントで Nav.vue を作成、index と about のリンクナビゲーションを作成する。  

そしてそのルートを移動する際は HTML の

```html
<a href="/about">ABOUT</a>
```

ではなく

```vue
<NuxtLink to="/about">ABOUT</NuxtLink>
```

と記述してリンクを作成する。  
ルート外、例えば外部サイトのリンクを貼る場合は従来の`<a>`要素を使うことになる。

---

# layouts

`layouts/default.vue`を作成し、`<Nav />` を表示させる。  
layouts 配下にいくつかのレイアウトコンポーネントを用意し、ページコンポーネントごとに切り替えることもできる。

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
<div>

`layouts/custom.vue`に別の共通レイアウトを組む例

```vue
<template>
  <div>
    <header>別の共通レイアウト</header>
    <slot />
  </div>
</template>
```

ページコンポーネントで custom レイアウトを参照する例

```vue
<template>
  <div>
    <NuxtLayout name="custom">
      <!-- ページコンテンツ -->
    </NuxtLayout>
  </div>
</template>
```

</div>

</div>

---

# Data Fetching / server ディレクトリ

`server/api`ディレクトリにある`users.js`を確認して、`components/userList.vue`に以下を記述する。

```vue
<template>
  <div>
    <ul>
      <li v-for="user in users">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: users } = await useFetch("/api/users");
</script>
```

---

# composables

`composables/useCounter.js`を作成する。  
アプリで再利用したいロジックを管理することができる。js ファイルではあるが、Vue コンポーネントで使ってきた関数を使用していることがわかる。

```js
import { ref, readonly } from "#app";

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

# composables

作成した useCounter コンポジション関数を使用する。

```vue
<template>
  <div>
    <p>カウント: {{ counter.count }}</p>
    <p><button @click="increment">increment!</button></p>
  </div>
</template>

<script setup>
const counter = useCounter();
function increment() {
  counter.increment();
}
</script>
```

<arrow v-click="1" x1="400" y1="400" x2="220" y2="300" color="#564" width="3" arrowSize="1" />

---

# Vue + Vue Router と Nuxt 3 の比較

デザインラボの記事ビューアーを Nuxt 3 でつくりなおしたもの

動作は Vue 3 のものと同じ

Node.js がセットアップ済みの人はローカルで動かしてみよう

1. https://github.com/tuqulore/vue-3-practices/ から ZIP をダウンロード
2. 任意の場所に ZIP を展開
3. handson-fetch-router-nuxt-finish ディレクトリに移動
4. `npm install` で NPM パッケージをインストール
5. `npm run dev` で Nuxt 3 の開発サーバーを起動

---

# Vue + Vue Router と Nuxt 3 の比較（ルーティング）

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
- composables ディレクトリに配置されたコンポジション関数

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
  $fetch("/api/count")
);
```

---

# Vue + Vue Router と Nuxt 3 の比較（データ取得）

便利だが素朴に Fetch API を使う場合と意図しない挙動の際が生じる場合がある

- 同一オリジン（例：`http://localhost:3000`）であっても、オリジンを含めた url で取得先を指定しなければいけない場合がある
  - server ディレクトリで提供する API エンドポイントはオリジン省略可能
  - 上記以外のケース、たとえばアセット（public ディレクトリで提供する静的ファイル）はオリジンが必要

Nuxt 3 の useFetch、$fetch は純粋なクライアント処理でない（サーバー側で内部的に処理される）場合があることが原因 https://nuxt.com/docs/getting-started/data-fetching#isomorphic-fetch-and-fetch

場合によっては（$fetch ではなく） fetch を使うことも検討すること

---

# VueUse

便利なコンポジション関数を提供しているライブラリ

- スクラッチ（ゼロ）から処理を書くのは車輪の再発明かもしれない
- 既製のライブラリを使用することで効率的に開発することができる
- https://vueuse.org/functions.html をみてみよう

---

# スタイルガイド

Vue 固有の記法についての公式なスタイルガイド

- スタイルガイドに書いてあることを守らなくても、動く Vue のコードを書くことはできる
- スタイルガイドに書いてあることを守ると、事前に起こりうる問題に対処することができる
- [eslint-plugin-vue](https://eslint.vuejs.org/)を使うとスタイルガイドに違反しているか静的にコードを解析・修正できる

[スタイルガイド](https://ja.vuejs.org/style-guide/)

---

# Vue 3 と Nuxt 3 の説明はこれで以上！

おつかれさまでした

以下を学んできた

- Vue の基本的な書き方
- Vue アプリケーションのコードを読む・書く
- Nuxt アプリケーションのコードを読む・書く

Nuxt 3 を使ってウェブアプリケーションをつくっていく準備ができた

業務・趣味でウェブアプリケーションを開発していきましょう！

学習の目安

- 理解していること
- 書けること

自信がない箇所は復習・質問しましょう！

---

# 課題

- レベル 1 ～ 3 の 3 つある
- 1 から順番に取り組んでもらう
- 16 時に解説する

---

# 課題（レベル 1）

問題：https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue

1. useFetch を使って http://localhost:3000/data.json から果物のリストを取得してください
2. 果物を順序なしリストで表示してください https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul

---

# 課題（レベル 2）

問題：https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue

コード上のコメントを読みながら、未完成のアプリを完成させてください

---

# 課題（レベル 3）

問題：https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue

コード上のコメントを読みながら、未完成のアプリを完成させてください
