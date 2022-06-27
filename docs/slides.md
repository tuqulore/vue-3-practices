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
- リアクティブの探求
  - ref, reactive, toRefs, readonly など
- 算出プロパティ（computed）
  - computed の基礎
- ウォッチャ（watch）
  - watch の基礎
- テンプレート構文の説明
  - mustache, v-bind, v-on, v-if/v-else/v-else-if, v-show, v-for, v-model, イベント, 省略記法
- コンポーネント
  - props, emit, slot など
- Vue アプリケーション開発に必要な周辺ライブラリ
  - throttle-debounce, fetch, Vue Router など

---

# はじめに

## Vue.js とは？

Web アプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースの JavaScript フレームワーク。

<div class="pt-4 text-sm">

<a href="https://v3.ja.vuejs.org/guide/introduction.html#vue-js-%E3%81%A8%E3%81%AF">
<carbon:arrow-right class="inline" /> 公式サイト
</a>
</div>

---

# 準備

### StackBlitz

本講座におけるハンズオン、演習、サンプルの閲覧は [StackBlitz](https://stackblitz.com/) でおこないます。

StackBlitz はブラウザ上で動作するオンライン IDE（統合開発環境）です。

動作環境を[こちら](https://developer.stackblitz.com/docs/platform/browser-support/)で確認して https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev にアクセスしてみましょう。

講師は適宜あたらしいハンズオン環境をつくっていきますが、受講者の皆さんは作成したハンズオン環境を（全消しするなど）使いまわしてもらって大丈夫です。

---

# Vue には 2 つの書き方があります

<div class="flex gap-8">

<div>
Vue2 で主に使われていた「Options API」

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
Vue3 で主に使われている「Composition API」

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

# まずは書いてみる

<div class="flex gap-8">

```vue
<template>
  <div>
    {{ count }}
    <button @click="increment">+</button>
  </div>
</template>

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

<div>
動作サンプル
<FirstSample />
</div>

</div>

---

# リアクティブの探求

<div class="flex gap-4">

<div>
<video controls loop style="height: 30vh" src="https://v3.ja.vuejs.org/images/reactivity-spreadsheet.mp4"></video>

<a href="https://v3.ja.vuejs.org/guide/reactivity.html#%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B">参考</a>

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

# リアクティブの探求

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

# リアクティブの探求（ref によるリアクティブな値の参照）

`ref` を使った値を操作する場合、`setup` 関数内では `value` プロパティにアクセスする。
`template` 内では変数（定数）そのものを参照するだけで値を得られる。

<div class="flex gap-8">

```vue
<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const val1 = ref(2);
    const val2 = ref(3);
    const sum = computed(() => {
      return val1.value + val2.value;
    });
    return {
      val1,
      val2,
      sum,
    };
  },
};
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

# リアクティブの探求（リアクティブな値をオブジェクトにまとめる）

リアクティブにしたいデータがオブジェクトの場合、`reactive` を使う

<div class="flex gap-8">

```vue
<template>
  <div>
    <input type="text" v-model="user.name" />
    {{ user.name }}
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    const user = reactive({
      name: "",
    });
    return {
      user,
    };
  },
};
</script>
```

</div>

---

# リアクティブの探求（オブジェクトにまとめたリアクティブな値を取り出す）

前項の `reactive` だと、分割代入しても値が取り出せない。Vue では `toRefs` を使うことで可能になる。

<div class="flex gap-8">

```vue
<template>
  <div>
    <input type="text" v-model="user.name" />
    <p>user.name: {{ user.name }}</p>
    <p>name: {{ name }}</p>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const user = reactive({
      name: "",
    });
    const { name } = toRefs(user);
    return {
      user,
      name,
    };
  },
};
</script>
```

</div>

---

# リアクティブの探求（リアクティブな値を読み込み専用にする）

<div class="flex gap-8">

<div class="h-md overflow-y-auto">

```vue
<template>
  <div>
    <!-- user.name を変更しようとすると失敗し、警告が表示されます -->
    <input type="text" v-model="user.name" />
    <p>user.name: {{ user.name }}</p>
    <p>name: {{ name }}</p>
  </div>
</template>
<script>
import { reactive, toRefs, readonly } from "vue";
export default {
  setup() {
    const user = readonly(
      reactive({
        name: "",
      })
    );
    const { name } = toRefs(user);
    return {
      user,
      name,
    };
  },
};
</script>
```

</div>

</div>

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
<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const count = ref(1);
    const plusOne = computed(() => count.value + 1);
    return {
      count,
      plusOne,
    };
  },
};
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
<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const count = ref(1);
    const plusOne = computed({
      get: () => count.value + 1,
      set: (value) => {
        count.value = value;
      },
    });
    const handleClick = () => {
      plusOne.value = 1;
    };
    return { count, plusOne, handleClick };
  },
};
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
<script>
import { computed } from "vue";
export default {
  setup() {
    const randomMethods = () => {
      return Math.random();
    };
    const randomComputed = computed(() => {
      return Math.random();
    });
    return {
      randomMethods,
      randomComputed,
    };
  },
};
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
<script>
import { ref, computed, watch } from "vue";
export default {
  setup() {
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
    return { count, plusOne };
  },
};
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
<script>
import { ref, computed, watch } from "vue";
export default {
  setup() {
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
    return { count, plusOne };
  },
};
</script>
```

</div>

---

# テンプレート構文

- 展開
- ディレクティブ
- クラスとスタイルのバインディング
- 条件付きレンダリング
- リストレンダリング
- イベントハンドリング
- フォーム入力バインディング

---

# 展開

Mustache 構文でテキスト展開できる。JavaScript 式を使用することもできる

```vue
<template>
  <div>Message: {{ msg }}</div>
</template>

<script>
export default {
  setup() {
    const msg = "Hello!";
    return {
      msg,
    };
  },
};
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
<script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(10);
    setInterval(() => {
      counter.value += 1;
    }, 1000);
    return {
      counter,
    };
  },
};
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
- 特定のディレクティブ(v-bind と v-on)は省略記法がある
- 特定のディレクティブは引数を渡すことができる(例: `v-on:click`)

---

# ディレクティブ（バインディング）

「展開」と同じようにリアクティブな値を HTML 属性に反映させる場合、 `v-bind` ディレクティブを使う

<div>

```vue
<template>
  <a v-bind:href="url"> Vue.js公式サイト </a>
</template>

<script>
export default {
  setup() {
    const url = "https://v3.ja.vuejs.org/";
    return {
      url,
    };
  },
};
</script>
```

省略するとこのように書ける

</div>

```html
<a :href="url"> Vue.js公式サイト </a>
```

---

# ディレクティブ（イベントハンドリング）

`v-on` ディレクティブは HTML 要素などの[イベント](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events)操作に使われる。`:`の後の引数でイベントの種類を指定できる

```vue
<template>
  <button v-on:click="clickHandler">Click</button>
</template>

<script>
export default {
  setup() {
    const clickHandler = () => {
      alert("clicked");
    };
    return {
      clickHandler,
    };
  },
};
</script>
```

<div class="mt-6">
  <ClickSample />
</div>

---

`v-on:click`は`@click`と省略可能

```vue
<template>
  <div id="event-handling">
    <p>{{ message }}</p>
    <button @click="reverseMessage">Reverse Message</button>
  </div>
</template>

<script>
export default {
  setup() {
    const message = "Hello Vue.js!";
    const reverseMessage = () => {
      message = message
        .split("") // ['H', 'e', 'l', 'l', 'o', ' ', 'V', 'u', 'e', '.', 'j', 's', '!']
        .reverse() // ['!', 's', '.j', '.', 'e', 'u', 'V', ',', ' ', 'o', 'l', 'l', 'e', 'H']
        .join(""); // !sj.euV, olleH
    };
  },
};
</script>
```

---

# 条件付きレンダリング

`v-if` あるいは `v-show` によって条件に応じてレンダリングする範囲を変更することができる。 `template` 要素に対して使うことでグルーピングすることもできる。 `v-if v-else v-else-if` でレンダリングの条件分岐ができる。 `v-show` は見た目上非表示にするが `v-if` は DOM 要素も取り除く。

```vue {all|3|10|all}
<template>
  <div id="conditional-rendering">
    <span v-if="seen">Now you see me</span>
  </div>
</template>

<script>
export default {
  setup() {
    const seen = true;
    return {
      seen,
    };
  },
};
</script>
```

<arrow v-click="2" x1="400" y1="420" x2="230" y2="365" color="#564" width="3" arrowSize="1" />

---

# 条件付きレンダリング

<div class="flex gap-4">

```vue
<template>
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
</template>

<script>
export default {
  setup() {
    const type = "A";
    return {
      type,
    };
  },
};
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

<script>
export default {
  setup() {
    const ok = true;
    return {
      ok,
    };
  },
};
</script>
```

</div>

---

# リストレンダリング

配列あるいはオブジェクトをもとに反復した要素の表示ができる。

<div class="flex gap-8">

<div class="h-sm overflow-y-auto">

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

<script>
export default {
  setup() {
    const todos = [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" },
    ];
    return {
      todos,
    };
  },
};
</script>
```

</div>

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

# リストレンダリング

要素の再利用と並び替えを考慮する場合、一意な値を `key` 属性に渡す必要がある。

<div class="flex gap-8">

<div class="h-sm overflow-y-auto">

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

<script>
export default {
  setup() {
    const todos = [
      { text: "Learn JavaScript", id: 1 },
      { text: "Learn Vue", id: 2 },
      { text: "Build something awesome", id: 3 },
    ];
    return {
      todos,
    };
  },
};
</script>
```

</div>

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

# イベントハンドリング

`v-on` によって DOM イベントの購読、イベント発火時の JavaScript の実行ができるようになる。

<div class="flex gap-8">

```vue
<template>
  <div>
    <button @click="counter += 1">Add 1</button>
    <p>clicked {{ counter }} times.</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0);
    return {
      counter,
    };
  },
};
</script>
```

```vue
<template>
  <div>
    <button @click="increment">Add 1</button>
    <p>clicked {{ counter }} times.</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0);
    const increment = () => {
      counter.value += 1;
    };
    return {
      counter,
      increment,
    };
  },
};
</script>
```

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

<script>
import { ref } from "vue";
export default {
  setup() {
    const message = ref("Hello Vue!");
    return {
      message,
    };
  },
};
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

<p class="text-xs">親コンポーネント - ParentComponent.vue</p>

```vue
<template>
  <ChildComponent title="Hello!" />
</template>
<script>
import ChildComponent from "./components/ChildComponent.vue";
export default {
  components: { ChildComponent },
};
</script>
```

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

```vue
<template>
  <p>{{ message }}</p>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    title: String,
  },
  setup(props) {
    const message = ref(props.title);
    return {
      message,
    };
  },
};
</script>
```

</div>

</div>

---

# プロパティを用いた子コンポーネントへのデータの受け渡し

数値を渡す場合、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - ParentComponent.vue</p>

```vue {all|2|all}
<template>
  <ChildComponent :count="14" />
</template>
<script>
import ChildComponent from "./components/ChildComponent.vue";
export default {
  components: { ChildComponent },
};
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

<script>
import { ref } from "vue";
export default {
  props: {
    count: Number,
  },
  setup(props) {
    const message = ref(props.count);
    return {
      message,
    };
  },
};
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

<p class="text-xs">親コンポーネント - ParentComponent.vue</p>

```vue {all|2|all}
<template>
  <ChildComponent :is-show="false" />
</template>
<script>
import ChildComponent from "./components/ChildComponent.vue";
export default {
  components: { ChildComponent },
};
</script>
```

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

<div class="h-xs overflow-y-auto">

```vue
<template>
  <p v-if="show">props'is-show'がtrueであれば見れます</p>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    isShow: Boolean,
  },
  setup(props) {
    const show = ref(props.isShow);
    return {
      show,
    };
  },
};
</script>
```

</div>

</div>

</div>

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />

---

# プロパティを用いた子コンポーネントへのデータの受け渡し

props はデフォルト値を設定することもできる

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - ParentComponent.vue</p>

```vue
<template>
  <ChildComponent :is-show="false" />
</template>
<script>
import ChildComponent from "./components/ChildComponent.vue";
export default {
  components: { ChildComponent },
};
</script>
```

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

<div class="h-xs overflow-y-auto">

```vue {all|9-12|all}
<template>
  <p v-if="show">props'is-show'がtrueであれば見れます</p>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const show = ref(props.isShow);
    return {
      show,
    };
  },
};
</script>
```

</div>

</div>

</div>

---

# プロパティを用いた子コンポーネントへのデータの受け渡し

配列、オブジェクトを渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - ParentComponent.vue</p>

```vue
<template>
  <ChildComponent :student="{ name: 'taro', old: '16' }" />
</template>
<script>
import ChildComponent from "./components/ChildComponent.vue";
export default {
  components: { ChildComponent },
};
</script>
```

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

```vue
<template>
  <p>こんにちは、{{ user.name }}さん、{{ user.old }}歳になりましたね</p>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    student: Object,
  },
  setup(props) {
    const user = ref(props.student);
    return {
      user,
    };
  },
};
</script>
```

</div>

</div>

---

# イベント購読を用いた親コンポーネントへのデータの受け渡し

子コンポーネントでイベントを発火させることによって可能

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">親コンポーネント - ParentComponent.vue</p>

```vue
<template>
  <ChildComponent @child-clicked="clicked" />
</template>
<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  components: { ChildComponent },
  setup() {
    const clicked = (message) => {
      alert(message);
    };
    return {
      clicked,
    };
  },
};
</script>
```

</div>

<div class="flex-shrink">

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

```vue
<template>
  <button @click="clickHandler">emit !</button>
</template>

<script>
export default {
  setup(props, context) {
    const clickHandler = () => {
      context.emit("child-clicked", "Hello!");
    };
    return {
      clickHandler,
    };
  },
};
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

<p class="text-xs">親コンポーネント - ParentComponent.vue</p>

```vue
<template>
  <ChildComponent v-model="title" />
  <p>{{ title }}</p>
</template>
<script>
import { ref } from "vue";
import ChildComponent from ... // 中略;
export default {
  components: { ChildComponent },
  setup() {
    const title = ref("Hello !");
    return {
      title,
    };
  },
};
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

<script>
import { computed } from "vue";

export default {
  props: {
    modelValue: String,
  },
  setup(props, context) {
    const title = computed({
      get: () => props.modelValue,
      set: (value) => {
        context.emit("update:modelValue", value);
      },
    });
    return { title };
  },
};
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

<p class="text-xs">親コンポーネント - ParentComponent.vue</p>

```vue
<template>
  <ChildComponent @update:modelValue="title = $event" :modelValue="title" />
  <p>{{ title }}</p>
</template>
<script>
import { ref } from "vue";
import ChildComponent from ... // 中略;
export default {
  components: { ChildComponent },
  setup() {
    const title = ref("Hello !");
    return {
      title,
    };
  },
};
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

<p class="text-xs">親コンポーネント - ParentComponent.vue</p>

```vue
<template>
  <ChildComponent>Hello Component</ChildComponent>
</template>
// scriptは中略
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

# Provide / Inject

<img src="https://v3.ja.vuejs.org/images/components_provide.png" alt="Provide / Inject" class="h-full" />

---

# Provide / Inject

コンポーネント階層の深さに関係なく、親コンポーネントは、そのすべての子階層へ依存関係を提供するプロバイダとして機能することができる

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">親コンポーネント - ParentComponent.vue</p>

```vue
<script>
import { provide } from "vue";
import ChildComponent from "./components/ChildComponent.vue";
export default {
  setup() {
    provide("location", "Tokyo");
  },
  components: { ChildComponent },
};
</script>
<template>
  <ChildComponent />
</template>
```

</div>

<div class="flex-shrink">

<p class="text-xs">子（孫）コンポーネント - ChildComponent.vue</p>

```vue
<script>
import { inject } from "vue";
export default {
  setup() {
    const loc = inject("location");
    return { loc };
  },
};
</script>
<template>
  {{ loc }}
</template>
```

</div>
</div>

---

子や孫コンポーネントから Provide の値を変更したい場合、リアクティブなデータを変更できるメソッドを提供することが推奨されている

<div class="flex gap-8">

<div class="h-sm overflow-y-auto flex-shrink">

```vue
<script>
import { provide, ref } from "vue";
import ChildComponent from "./components/ChildComponent.vue";
export default {
  setup() {
    const locName = ref("Tokyo");
    provide("location", locName);
    const updateLocation = () => {
      locName.value = "Fukuoka";
    };
    provide("updateLocation", updateLocation);
    return {
      locName,
    };
  },
  components: { ChildComponent },
};
</script>

<template>
  <input type="text" v-model="locName" /><br />
  <ChildComponent />
</template>
```

</div>

<div class="flex-shrink">

```vue
<script>
import { inject } from "vue";
export default {
  setup() {
    const loc = inject("location");
    const updateUserlocation = inject("updateLocation");
    return { loc, updateUserlocation };
  },
};
</script>

<template>
  {{ loc }}
  <button @click="updateUserlocation">change Fukuoka</button>
</template>
```

</div>
</div>

---

# Vue アプリケーション開発に必要な周辺ライブラリ

アプリケーションに必要な機能は他のライブラリと組み合わせて実装する

- throttle-debounce
- fetch
- Vue Router

---

# throttle, debounce

throttle, debounce を使うとイベントハンドリング関数の呼び出し頻度を間引くことができる

<div class="flex gap-8">

<div class="h-sm overflow-y-auto flex-shrink">

```vue
<script>
import { debounce } from "throttle-debounce";
import { ref } from "vue";
export default {
  setup() {
    const message = ref("");
    const originalFruits = [
      "orange",
      "banana",
      "strawberry",
      "grape",
      "watermelon",
    ];
    const fruits = ref(originalFruits);
    const updateText = debounce(1000, () => {
      fruits.value = originalFruits.filter(
        (fruit) => fruit.indexOf(message.value) >= 0
      );
    });
    return {
      updateText,
      fruits,
      message,
    };
  },
};
</script>
```

</div>

<div class="flex-shrink">

```vue
<template>
  <input type="text" v-model="message" @input="updateText" />
  <ul>
    <li v-for="(fruit, index) in fruits" :key="index">
      {{ fruit }}
    </li>
  </ul>
</template>
```

</div>
</div>

---

# fetch

サーバーとの通信をおこなうためのブラウザの標準 API

---

# Vue Router

URL ごとに表示する画面を制御するためのライブラリ

---

# fetch / Vue Router を使ったサンプル

https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/sample-fetch-router?file=src/App.vue&terminal=dev

---

# Nuxt 3

効率的に Vue 3 アプリケーション開発をおこなうためのフレームワーク

- Vue.js が導入済み（Nuxt を導入すれば Vue.js の導入が不要）
- Vue コンポーネント等の import を省略できる
- pages ディレクトリに .vue ファイルを作成するだけで HTML ページができる（ルーティングの自動生成）
- server ディレクトリにサーバー側の処理が書ける（API エンドポイントの生成）
- Nuxt 3 は 2022 年 6 月現在、リリース候補版が公開されている

---

# Nuxt 3

- pages
- NuxtLink
- layouts
- Data Fetching / server ディレクトリ
- Suspense
- composables

---

# pages

app.vue を削除する。  
pages ディレクトリに.vue ファイルを配置し、複数ページを構成する。
まずは `pages/index.vue`, `pages/about.vue` を作成する。

Vue 開発環境では App.vue ファイルをメインで開発していて、Nuxt でも同様の目的を app.vue にて行える。例えば app.vue は以下のように書いて、各ページの template 部分が`<NuxtPage />`に置き換わる。

```vue
<template>
  <header>共通ヘッダ</header>
  <NuxtPage />
</template>
```

ただし、複数ページを構成するにあたっては pages 内で開発・管理することが一般的。
その際、app.vue でこのようなことができるが、後述する layouts 機能を使ったほうがよい。

---

# NuxtLink

コンポーネントで Nav.vue を作成、index と about のリンクナビゲーションを作成する。  
Nuxt ではページを作成するだけで Vue Router による設定を自動に行ってくれる、つまり Vue 環境下のように手動でルーティング設定を生成する必要がない。

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

`layouts/default.vue`を作成し、共通ナビゲーションを表示させる。  
pages で解説したように例えば app.vue に共通ヘッダを持たせるのであれば、以下のような書き方で事足りるが、ページによってはヘッダが不要などといったことが出てくる。
その際、ページそのもののテンプレートを複数用意し、各ページがそのテンプレートを必要に応じて選び変えることができる。

`app.vue`の例

```vue
<template>
  <header>共通ヘッダ</header>
  <NuxtPage />
</template>
```

`layouts/default.vue`の例

```vue
<template>
  <div>
    <header>共通ヘッダ</header>
    <slot />
  </div>
</template>
```

---

# Data Fetching / server ディレクトリ

`server/api`ディレクトリにある`users.js`を確認、`components/userList.vue`に以下を記述する。

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

<script>
export default {
  async setup() {
    const { data: users } = await useFetch("/api/users");
    return { users };
  },
};
</script>
```

---

# Suspense

コンポーネントのトップレベルで`async`を使った場合、Promise が解決すると同時に表示する仕組みを学ぶ。
非同期で処理されるコンポーネントをローディング表示からコンポーネント表示に切り替える機能。  
まずはコンポーネント`SuspenseTest.vue`を作成。

```vue
<script>
export default {
  async setup() {
    const userList = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(["太郎", "花子", "次郎"]);
        }, 1000);
      });
    };
    const users = await userList();
    return { users };
  },
};
</script>
```

---

# Suspense

`v-if`を使わずとも、1 秒経ってローディング完了後コンポーネントを表示に切り替える

```vue
<template>
  <div>
    <Suspense>
      <template #default>
        <SuspenseTest />
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>
```

---

# composables

アプリ全体共通のデータを管理する。js ファイルではあるが、中身は vue の記述に近いことがわかる。 ここで状態を管理する。
`composables/userCounter.js`を作成する。

```js
import { ref, readonly } from "vue";
const count = ref(0);
export default () => {
  const increment = () => count.value++;

  return {
    count: readonly(count),
    increment,
  };
};
```

---

# composables

```vue
<template>
  <div>
    <p>カウント: {{ counter.count }}</p>
    <p><button @click="increment">increment!</button></p>
  </div>
</template>

<script>
import useCounter from "~~/composables/useCounter";
export default {
  setup() {
    const counter = useCounter();
    const increment = () => {
      counter.increment();
    };
    return {
      counter,
      increment,
    };
  },
};
</script>
```

---

# スタイルガイド

Vue 固有の記法についての公式なスタイルガイド

課題制作をする前に理解する

[スタイルガイド](https://v3.ja.vuejs.org/style-guide/)

---

# 自由課題

Nuxt3 環境を使ってアプリを自由につくってみよう。
