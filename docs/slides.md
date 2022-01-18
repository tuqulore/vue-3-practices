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

# Vue.js

Web アプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースの JavaScript フレームワーク

<div class="pt-4 text-sm">

<a href="https://v3.ja.vuejs.org/guide/introduction.html#vue-js-%E3%81%A8%E3%81%AF">
<carbon:arrow-right class="inline" /> 公式サイト
</a>
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

<a href="https://v3.ja.vuejs.org/guide/introduction.html#%E6%9D%A1%E4%BB%B6%E5%88%86%E5%B2%90%E3%81%A8%E3%83%AB%E3%83%BC%E3%83%95%E3%82%9A" target="_blank">DEMO</a>

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

:key 属性を v-for から得られる第 2 引数から一意の ID を紐付ける

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
export default {
  setup() {
    const counter = 0;
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
export default {
  setup() {
    const counter = 0;
    const increment = () => {
      counter += 1;
    })
    return {
      counter,
      increment
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

# Learn More

[Documentations](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev) · [Showcases](https://sli.dev/showcases.html)
