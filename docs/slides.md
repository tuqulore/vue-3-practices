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
- テンプレート構文の説明
  - mustache, v-bind, v-on, v-if/v-else/v-else-if, v-show, v-for, v-model, イベント, 省略記法
- （未作成）ライフサイクル
  - onMounted, onUpdated, onUnmounted など
- 算出プロパティ（computed）
  - computed の基礎
- ウォッチャ（watch）
  - watch の基礎
- コンポーネント
  - props, emit, slot など

---

# はじめに

Web アプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースの JavaScript フレームワーク。

<div class="pt-4 text-sm">

<a href="https://v3.ja.vuejs.org/guide/introduction.html#vue-js-%E3%81%A8%E3%81%AF">
<carbon:arrow-right class="inline" /> 公式サイト
</a>
</div>

---

# 準備

本講座におけるハンズオンは以下によって行えます。基本は本スライドにあるサンプルコードを試しつつ、余力があれば [こちら](https://github.com/tuqulore/vue-3-practices#%E6%BC%94%E7%BF%92)の演習に挑戦してみてください。

- Vue 3 [CodeSandbox](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/vite-blank-template?file=/src/App.vue) [StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/vite-blank-template?file=src/App.vue&terminal=dev)
- Nuxt 3 [CodeSandbox](https://codesandbox.io/s/github/tuqulore/vue-3-practices/tree/main/nuxt-template?file=/app.vue)(非推奨) [StackBlitz](https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/nuxt-template?file=app.vue&terminal=dev)

## 注意点

### CodeSandbox

現状 Nuxt を用いた演習に対しては Hot Module Replacement(HMR)が機能しないため、非推奨です [#12](https://github.com/tuqulore/vue-3-practices/issues/12)。

代わりに StackBlitz で演習をおこなってください。

### StackBlitz

一部のブラウザでは動作に設定が必要です。詳しくは[こちら](https://developer.stackblitz.com/docs/platform/browser-support/)を参照してください。

---

# 2 つの代表的な API と注意点

<div class="flex gap-8">

<div>
Vue2で主に使われていた「Options API」

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
Vue3で主に使われるであろう「Composition API」

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

現状、Vue 関連の記事は Options API で解説されているほうが大多数であり、初学者の方は混乱されるかもしれません。  
ちなみに Vue2, 3 どちらでも両 API は使えます、ただし、今後将来に向けて多くのプログラマーにとってメリットを感じられている Composition API が人気があり、本講座でも Composition API を取り扱うことにします。

---

<img src="/apis.png" alt="Composition APIのメリット" style="height: 100%" />

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
<video controls loop style="height: 40vh" src="https://v3.ja.vuejs.org/images/reactivity-spreadsheet.mp4"></video>

<a href="https://v3.ja.vuejs.org/guide/reactivity.html#%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B">参考</a>

</div>

<div>

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

1. 値が読み込まれたときに追跡する。 例: val1 + val2 は val1 と val2 の両方を読み込む。
2. 値の変更を検知する。 例: val1 = 3 と入れるとき。
3. 最初に値を読み込んだコードを再実行する。 例: sum = val1 + val2 を再度実行して、 sum の値を更新する。

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

# リアクティブの探求（Vue での ref によるリアクティブな変数）

ref を使ったデータを操作する場合、setup 内では value にアクセスする。
ただし、template 内では変数（定数）そのものを参照するだけで value を得られる。

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
    <p>val1: <input type="number" v-model="val1" /></p>
    <p>val2: <input type="number" v-model="val2" /></p>
    <p>sum: {{ sum }}</p>
  </div>
</template>
```

<ReactiveSample />

</div>

---

# リアクティブの探求（Vue での reactive によるリアクティブな変数）

リアクティブにしたいデータがオブジェクトの場合、reactive が便利

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

# リアクティブの探求（Vue での toRefs を使った分割代入）

前項の reactive だと、オブジェクトの分割代入ができず、その場合、Vue では toRefs を使うことで可能になる。

<div class="flex gap-8">

```vue
<template>
  <div>{{ name }}さんは{{ old }}歳になりました</div>
</template>
<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const user = reactive({
      name: "taro",
      old: 16,
    });
    const { name, old } = toRefs(user);
    return {
      name,
      old,
    };
  },
};
</script>
```

</div>

---

# リアクティブの探求（Vue での reactive に対して読み込み専用にする）

<div class="flex gap-8">

```vue
<script>
import { reactive, readonly } from "vue";

export default {
  setup() {
    const original = reactive({ count: 0 });
    const copy = readonly(original);
    original.count++;
    // copy を変更しようとすると失敗し、警告が表示されます
    copy.count++; // warning: "Set operation on key 'count' failed: target is readonly."
    return {
      original,
      copy,
    };
  },
};
</script>
```

</div>

---

# テンプレート構文の説明

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

# 展開

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

ディレクティブは Vue によって提供される特別な属性。 v- から始まる。特定のディレクティブ(v-bind と v-on)は省略記法がある。

先程の「展開」を HTML 属性に反映させたい場合に使ってみます

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

```html
<a :href="url"> Vue.js公式サイト </a>
```

---

# ディレクティブ

v-on ディレクティブはイベントに使われ、:の後の引数でイベントの種類を指定できる

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

配列あるいはオブジェクトをもとに反復した要素の表示ができる。要素の再利用と並び替えができるように一意な `key` 属性を渡す必要がある。

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

`key` 属性を v-for から得られる第 2 引数から一意の index を紐付ける

<div class="flex gap-8">

```vue
<template>
  <div id="list-rendering">
    <ol>
      <li v-for="(todo, index) in todos" :key="index">
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

# ライフサイクル

(https://v3.ja.vuejs.org/guide/instance.html#%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB%E3%82%BF%E3%82%99%E3%82%A4%E3%82%A2%E3%82%AF%E3%82%99%E3%83%A9%E3%83%A0)[公式]

<img src="/lifecycle.svg" alt="ライフサイクル ダイアグラム" class="block h-full">

---

# 算出プロパティ（computed）

あるデータを元に計算式を返したい場合、`computed` 関数を利用するのが一般的。

```vue
<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const count = ref(1);
    const plusOne = computed(() => count.value + 1);

    console.log(plusOne.value); // 2

    plusOne.value++; // error
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

` get``set `関数を用意することで書込み可能なオブジェクトを作成することができる

```vue
<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const count = ref(1);
    const plusOne = computed({
      get: () => count.value + 1,
      set: (val) => {
        count.value = val - 1;
      },
    });

    plusOne.value = 1;
    console.log(count.value); // 0
    return {
      count,
      plusOne,
    };
  },
};
</script>
```

---

# computed と methods との違い

`methods` は都度読み出される毎に実行するのに対し、`computed` 内で参照しているリアクティブなデータが変更されない限り、`computed` は一度キャッシュされた結果を返す。
うまく使い分けるとパフォーマンスの向上に役立てる。

<div class="flex gap-4">

```vue
<template>
  <p>methodsを使った場合</p>
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

```vue
<script>
import { ref, watch } from "vue";
export default {
  setup() {
    const count = ref(0);
    watch(count, (newCount, prevCount) => {
      /* ... */
    });
    return {
      count,
    };
  },
};
</script>
```

---

# ウォッチャ（watch）

配列を監視する場合、複数のデータソースを同時に監視できる

```vue
<script>
import { ref, watch } from "vue";
export default {
  setup() {
    const firstName = ref("");
    const lastName = ref("");

    watch([firstName, lastName], (newValues, prevValues) => {
      console.log(newValues, prevValues);
    });

    firstName.value = "John"; // logs: ["John", ""] ["", ""]
    lastName.value = "Smith"; // logs: ["John", "Smith"] ["John", ""]
    return {
      firstName,
      lastName,
    };
  },
};
</script>
```

---

# コンポーネント

- コンポーネントの基本と構成
- プロパティを用いた子コンポーネントへのデータの受け渡し
- 子コンポーネントのイベントを購読する
- コンポーネントで v-model を使う
- スロットによるコンテンツ配信

---

# コンポーネントの基本と構成

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

# 子コンポーネントのイベントを購読する

子コンポーネントでイベントを発火させて親コンポーネントに知らせ、親側で処理するなどに使える方法

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

# コンポーネントで`v-model`を使う

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

```vue
<template>
  <input type="text" v-model="title" @input="changeTitle" />
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    modelValue: String,
  },
  setup(props, context) {
    const title = ref(props.modelValue);
    const changeTitle = () => {
      context.emit("update:modelValue", title.value);
    };
    return {
      title,
      changeTitle,
    };
  },
};
</script>
```

</div>

<div class="flex-shrink-0">
<p class="text-xs">実行サンプル</p>

<TwowayParent />

</div>

</div>

---

# スロットによるコンテンツ配信

HTML 要素のように、コンポーネントに要素を渡す際は子コンポーネントは slot で受けるのが基本

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

<div class="flex-shrink">

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

補足: throttle をつかったリアルタイムなテキスト検索結果

<div class="flex gap-8">

<div class="flex-shrink">

```vue
<script>
import _ from "lodash";
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
    const updateText = _.throttle(() => {
      fruits.value = originalFruits.filter(
        (fruit) => fruit.indexOf(message.value) >= 0
      );
    }, 1000);
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
