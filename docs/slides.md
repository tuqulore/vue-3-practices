---
# try also 'default' to start simple
theme: seriph
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

# Vue.js

Web アプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースの JavaScript フレームワーク

<div class="pt-4 text-sm">

<a href="https://v3.ja.vuejs.org/guide/introduction.html#vue-js-%E3%81%A8%E3%81%AF">
<carbon:arrow-right class="inline" /> 公式サイト
</a>
</div>

---

# Vue.js

- はじめに
- テンプレート構文
- ライフサイクル
- メソッド
- 算出プロパティとウォッチャ
- HTML クラスのバインディング
- コンポーネント
- スロット

---

# はじめに

- データバインディング（data）
- 入力制御のサンプル（v-on:click）
- 条件分岐（v-if / v-else）
- ループ（v-for）

---

# データバインディング（data）

まずは基礎となるデータバインディング

```vue
<template>
  <div id="counter">Counter: {{ counter }}</div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
};
</script>
```

結果

```
Counter: 0
```

---

# データバインディング（data）

<p class="text-sm">
counterを1秒ごとに増やしていく
</p>

```vue
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
};
</script>
```

結果

<div>
<CounterSample />
</div>
---

# 入力制御のサンプル（v-on:click）

クリックを実装

```vue
<template>
  <button v-on:click="clickHandler">Click</button>
</template>

<script>
export default {
  methods: {
    clickHandler() {
      alert("clicked");
    },
  },
};
</script>
```

<div class="mt-6">
  <ClickSample />
</div>
---

```vue
<template>
  <div id="event-handling">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue.js!",
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split("") // ['H', 'e', 'l', 'l', 'o', ' ', 'V', 'u', 'e', '.', 'j', 's', '!']
        .reverse() // ['!', 's', '.j', '.', 'e', 'u', 'V', ',', ' ', 'o', 'l', 'l', 'e', 'H']
        .join(""); // !sj.euV, olleH
    },
  },
};
</script>
```

<div class="mt-4">
  <a target="_blank" href="https://v3.ja.vuejs.org/guide/introduction.html#%E3%83%A6%E3%83%BC%E3%82%B5%E3%82%99%E3%83%BC%E5%85%A5%E5%8A%9B%E3%81%AE%E5%88%B6%E5%BE%A1">DEMO</a>
</div>

---

# 双方向バインディング

Vue はまた、フォームの入力とアプリケーションの状態を双方向にバインディングするための v-model ディレクティブも提供します

<div class="flex gap-8">

```vue
<template>
  <div id="two-way-binding">
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue!",
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

# 条件分岐（v-if / v-else）

`v-if`の評価を false にすると非表示となる

```vue {all|3|11|all}
<template>
  <div id="conditional-rendering">
    <span v-if="seen">Now you see me</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: true,
    };
  },
};
</script>
```

<a href="https://v3.ja.vuejs.org/guide/introduction.html#%E6%9D%A1%E4%BB%B6%E5%88%86%E5%B2%90%E3%81%A8%E3%83%AB%E3%83%BC%E3%83%95%E3%82%9A" target="_blank">DEMO</a>

<arrow v-click="2" x1="400" y1="420" x2="180" y2="340" color="#564" width="3" arrowSize="1" />

---

# ループ（v-for）

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
  data() {
    return {
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" },
      ],
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

# Learn More

[Documentations](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev) · [Showcases](https://sli.dev/showcases.html)
