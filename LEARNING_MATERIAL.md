# 学習資料



## 本資料の説明

- 学習の参考になるよう各セクションと適切な順序にまとめています
- 公開されているのでいつでも学習活用してください
- セクションごとに対応する公式ドキュメントとその理解の目安となるキーポイントがあります
- 自習時にキーポイントが分からなければ公式ドキュメントを参照しましょう
- 逆に言えば公式ドキュメントは詳細に立ち入った説明がありますがキーポイントが分かれば十分です
- 注釈は *斜体* で表記します
- 慣れない用語があれば[用語集](https://github.com/tuqulore/vue-3-practices/blob/main/TERM.md)を参照しましょう



## Vueの説明


### [Vue.js とは？](https://ja.vuejs.org/guide/introduction.html#what-is-vue)

キーポイント: ユーザーインターフェイスを構築するためのプログレッシブ（漸進的）フレームワーク。HTMLページ上で `script` タグで読み込みVueを使うこともできるし、後述のSFC形式でWebpack、ViteなどによってVueアプリケーションをビルドすることもできる。

*Vueでのアプリケーション開発は、後者の形式でおこなうことがほとんど。前者はフロントエンド部分を既に異なるウェブアプリケーションフレームワークで実装しており、補助的にVueを導入したいケースなどで使われることがある。本資料ではSFCによるVueコンポーネントの記述を前提として説明していく。*



## Vueの書き方の説明


### [（Options API と Composition API）どちらを選ぶか？](https://ja.vuejs.org/guide/introduction.html#which-to-choose)

キーポイント：Options APIだとオブジェクトプロパティとして各処理を書いたり値を初期化したりする。Composition APIは所定の関数を呼び出すことによって各処理を書いたり値を初期化したりする。

[mixinsは非推奨](https://ja.vuejs.org/api/options-composition.html#mixins)と明記されているので、再利用したいロジックがあるのであれば Composition API を使用することが強く勧められる。

> Vue 2 では、ミックスインはコンポーネントロジックの再利用可能なチャンクを作成するための主要なメカニズムでした。ミックスインは Vue 3 でも引き続きサポートされていますが、コンポーネント間でのコード再利用には、Composition API が好ましいアプローチとなっています。

*Composition API が後発で提供された関係上、Options API の Tips が多々インターネット上にある。本資料と公式ドキュメント以外で自習する場合は `Composition API` というキーワードを含めて検索するなど工夫が必要。公式ドキュメントはどちらでも学習可能なように整備されている。*

> 学習を進める段階では、どちらか一方のスタイルにこだわる必要はありません。このドキュメントの続きの部分に登場するコードサンプルは、該当する場合、両方のスタイルで提供されます。左サイドバーの上部にある API 選択スイッチを使って、いつでもスタイルを切り替えることができます。



## リアクティビティーの説明


### [リアクティビティーの探求](https://ja.vuejs.org/guide/extras/reactivity-in-depth.html)

キーポイント：

1. 値が読み込まれたときに追跡する。 例: val1 + val2 は val1 と val2 の両方を読み込む。
2. 値の変更を検知する。 例: val1 = 3 と入れるとき。
3. 最初に値を読み込んだコードを再実行する。 例: sum = val1 + val2 を再度実行して、 sum の値を更新する。

Vanilla JSでは

1. をやるには改めて変数代入する必要がある
2. をやるには比較演算子によって値が更新されたか判定する必要がある
3. をやるには手続き的に再実行する処理を追加する必要がある

Vueでは 1\. 2\. 3\. を暗黙的に実行してくれる仕組みがあり、これをリアクティブ（反応的）であると表現する。リアクティブであることで値が更新されたときビューの再描画をおこなうこと（データバインディング）ができ、宣言的にUIを記述することができる。

*手続き的にUIの動的処理を書いていた頃と比べ、DOM操作が楽、バグが少なくなる、描画処理が最適化される（再描画頻度、スタイルの計算量など）、といった様々なメリットがある。昨今のフロントエンド開発で用いられるツールには大抵これらの要素が備わっていると考えてよい。*



## Composition APIでの書き方の説明


### [<script setup>](https://ja.vuejs.org/api/sfc-script-setup.html)

キーポイント：`setup` 属性を `<script>` ブロックに付与することで利用できる。ブロックの最上位で変数定義、関数宣言、インポートをおこなうとテンプレートで使用できる。


### [リアクティビティーの基礎](https://v3.ja.vuejs.org/guide/composition-api-introduction.html#ref-%E3%81%AB%E3%82%88%E3%82%8B%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%AA%E5%A4%89%E6%95%B0)

キーポイント： `ref` によってリアクティブな参照を作成できる。

*後述でリアクティブな参照のさまざまな作り方を学ぶが、まずは `ref` を使えば問題ないと思ってもらってよい。*


### [算出プロパティ](https://ja.vuejs.org/guide/essentials/computed.html)

キーポイント：リアクティブな参照をもとに読み取り専用の計算済みの値を `computed` 関数によって生成することができる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-computed?file=src/App.vue&terminal=dev

*自分でリアクティブな参照に対して再計算する処理をおこなうと、処理の呼び出しごとに再計算される。 `computed` 関数を使うことで計算に必要な値が変化するごとに再計算される。パフォーマンスの観点では後者の方が効率がよい。*


### [ウォッチャー](https://ja.vuejs.org/guide/essentials/watchers.html)

キーポイント：リアクティブな参照に対して値に変化が生じたときに必要な処理を `watch` 関数によって書くことができる。 



## テンプレート構文の説明


### [展開](https://ja.vuejs.org/guide/essentials/template-syntax.html#text-interpolation)

キーポイント：Mustache構文でテキスト展開できる。JavaScript式を使用することもできる

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-mustache-setup?file=src/App.vue&terminal=dev


### [ディレクティブ](https://ja.vuejs.org/guide/essentials/template-syntax.html#directives)

キーポイント：ディレクティブはVueによって提供される特別な属性。 `v-` から始まる。特定のディレクティブ(v-bindとv-on)は省略記法がある。


### [クラスとスタイルのバインディング](https://ja.vuejs.org/guide/essentials/class-and-style.html)

キーポイント：`v-bind` によってオブジェクト構文や配列構文で動的にクラスとスタイルを付与することができる。

演習：[イベントハンドリングのセクション](#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%83%8F%E3%83%B3%E3%83%89%E3%83%AA%E3%83%B3%E3%82%B0)を参照


### [条件付きレンダリング](https://ja.vuejs.org/guide/essentials/conditional.html)

キーポイント： `v-if` あるいは `v-show` によって条件に応じてレンダリングする範囲を変更することができる。 `v-show` は見た目上非表示にするが `v-if` はDOM要素も取り除く。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-v-if?file=src/App.vue&terminal=dev


### [リストレンダリング](https://ja.vuejs.org/guide/essentials/list.html)

キーポイント：配列あるいはオブジェクトをもとに反復した要素の表示ができる。要素の再利用と並び替えができるように一意な `key` 属性を渡す必要がある。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-v-for?file=src/App.vue&terminal=dev

*オブジェクトのリストレンダリングは[Object.entries()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)をイメージしてもらってよい。利用頻度としては配列のリストレンダリングをおこなうことがほとんど。*


### [イベントハンドリング](https://ja.vuejs.org/guide/essentials/event-handling.html)

キーポイント： `v-on` によってDOMイベントの購読、イベント発火時のJavaScriptの実行ができるようになる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-reactive-class-binding-event-handling?file=src/App.vue&terminal=dev


### [フォーム入力バインディング](https://ja.vuejs.org/guide/essentials/forms.html)

キーポイント： `v-model` によってformのinput要素やtextarea要素、select要素の入力イベントに応じてデータを更新できるようになる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-v-model?file=src/App.vue&terminal=dev


## 単一ファイルコンポーネントの説明 *(Optional)*


### [単一ファイルコンポーネント](https://ja.vuejs.org/guide/scaling-up/sfc.html)

キーポイント：HTML、CSS、JavaScriptを一つのファイルで書くことができる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-style?file=src/App.vue&terminal=dev


### [SFC スタイルの機能](https://v3.ja.vuejs.org/api/sfc-style.html)

キーポイント： `scoped` 属性をもつとコンポーネント内に対してのみスタイルが適用されスタイルをカプセル化できる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-scoped-css-component?file=src/App.vue&terminal=dev



## インスタンスの説明 *(Optional)*


### [Vue アプリケーションの作成](https://ja.vuejs.org/guide/essentials/application.html)

キーポイント：すべてのVueアプリケーションは `createApp` 関数でアプリケーションインスタンスを作成する。アプリケーションはルートコンポーネントを持っており、それをマウントすることでDOM上にVueで管理されたビューが表示されるようになる。

*ルートコンポーネントがあることを知っておくと、自分でVueアプリケーション開発のための環境構築をするときに戸惑わなくてすむ。*



## コンポーネントの説明


### [コンポーネントの基礎](https://ja.vuejs.org/guide/essentials/component-basics.html)

キーポイント：コンポーネントという粒度で再利用可能な見た目と機能を管理することができる。Vue アプリケーションはコンポーネントをネストされたツリー状によって構成される。

*コンポーネントとして管理することで、テンプレート、振る舞い、見た目、機能を[抽象化](https://developer.mozilla.org/ja/docs/Glossary/Abstraction)することができる。*


### [Props の受け渡し](https://ja.vuejs.org/guide/essentials/component-basics.html#passing-props)

キーポイント： `props` を使って子コンポーネントへデータを渡すことができる。

演習：[一方向のデータフローのセクション](#%E4%B8%80%E6%96%B9%E5%90%91%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%83%95%E3%83%AD%E3%83%BC)を参照


### [イベントの購読](https://ja.vuejs.org/guide/essentials/component-basics.html#listening-to-events)

キーポイント：子コンポーネントから発火されたイベントを購読することで子コンポーネントからデータを受け取ることができる。


### [イベントの発行と購読](https://ja.vuejs.org/guide/components/events.html#emitting-and-listening-to-events)

キーポイント：子コンポーネントから発火されたイベントを購読することで子コンポーネントからデータを受け取ることができる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-emit-event-handling?file=src/App.vue&terminal=dev


### [コンポーネントの v-model](https://ja.vuejs.org/guide/components/v-model.html)

キーポイント： `props` とイベントの購読で入力の制御をするときは `v-model` を使うことで簡潔に書くことができる。

演習：[一方向のデータフローのセクション](#%E4%B8%80%E6%96%B9%E5%90%91%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%83%95%E3%83%AD%E3%83%BC)を参照

*DOM要素の `v-model` とVueコンポーネントの `v-model` で用いられるプロパティ名とイベント名が異なることに注意。また、実は[複数のv-modelをバインディング](https://ja.vuejs.org/guide/components/v-model.html#multiple-v-model-bindings)することもできる。コンポーネントを呼び出す際に記述量が少なくなるので活用したい。*


### [スロットによるコンテンツ配信](https://ja.vuejs.org/guide/essentials/component-basics.html#content-distribution-with-slots)

キーポイント： `slots` によってコンポーネントの子階層に直接テンプレートを渡すことができる

*[名前付きスロット](https://ja.vuejs.org/guide/components/slots.html#named-slots)を使うことで複雑なレイアウトを含んだコンポーネントにテンプレートを渡しやすくすることもできる。*

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-slot?file=src/App.vue&terminal=dev


### [プロパティのバリデーション](https://ja.vuejs.org/guide/components/props.html#prop-validation)

キーポイント： `props` はどんな値を受け取るか制約を設けることができる。

*もしプロパティのバリデーションを設定しなければ、自身でバリデーション処理を書く必要がある。どんなプロパティを受け付けたいか表明することにもなるので積極的に設定したい。*

演習：[一方向のデータフローのセクション](#%E4%B8%80%E6%96%B9%E5%90%91%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%83%95%E3%83%AD%E3%83%BC)を参照


### [一方向のデータフロー](https://ja.vuejs.org/guide/components/props.html#one-way-data-flow)

キーポイント：`props` は親→子へデータが更新されることはあっても子→親へデータが更新されてはならない（することができない）。 `props` の値を変更したい場合は `props` の値を初期値としたリアクティブな参照を別に作成する。`props` の値を保持したい場合は `computed` などを使用する。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-reactive-props-component-v-model?file=src/App.vue&terminal=dev



## Composition API <script setup> での書き方の詳細 *(Optional)*


### [ライフサイクルフック](https://ja.vuejs.org/guide/essentials/lifecycle.html)

キーポイント：コンポーネントの各ライフサイクルによって必要な処理をライフサイクルフックによって書くことができる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-mounted?file=src/App.vue&terminal=dev


### [defineProps と defineEmits](https://ja.vuejs.org/api/sfc-script-setup.html#defineprops-defineemits)

キーポイント： `setup` 関数に渡されていた `props` と `context.emit` に相当するプロパティの参照とイベントの発火は `defineProps` と `defineEmits` によって宣言しておこなうことができる。



## テンプレート参照 *(Optional)*


### [テンプレート参照](https://ja.vuejs.org/guide/essentials/template-refs.html)

キーポイント：特定のDOM要素や子コンポーネントインスタンスを直接操作するためのリアクティブな参照を作成することができる。



## Provide / inject *(Optional)*


### [Provide / inject](https://ja.vuejs.org/guide/components/provide-inject.html)

キーポイント： `props` は直下の子コンポーネントに対してしかデータを渡すことができないが、 `provide` と `inject` を使うと `provider` を持つコンポーネントの子孫コンポーネントは `inject` でデータを受け取ることができる。

*本資料では取り扱わないがコンポーネントの参照関係に制約されずデータを取得、更新する（状態管理）ライブラリもある。[Pinia](https://pinia.vuejs.org/)など参照されたい。*



## スケールアップ


### [ルーティング](https://router.vuejs.org/guide/)

キーポイント：vue-routerを使うことで画面遷移処理を書くことができる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-vue-router?file=src/App.vue&terminal=dev


### [セキュリティ](https://ja.vuejs.org/guide/best-practices/security.html)

キーポイント：テンプレートは適切にエスケープ処理されたりしている。セキュリティ上注意すべき点が書かれている


### データ取得

キーポイント：[Fetch API](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API)などを使用してリアクティブな値に格納する。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-fetch?file=src/App.vue&terminal=dev


### パフォーマンスチューニング

キーポイント：[throttle-debounce](https://www.npmjs.com/package/throttle-debounce)などのライブラリを使用して入力イベントなど高頻度のイベント発火を間引くことで再描画の頻度をへらし、描画負荷を軽減することができる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-debounce?file=src/App.vue&terminal=dev



## Nuxtの説明


### [What is Nuxt?](https://nuxt.com/docs/getting-started/introduction#what-is-nuxt)

キーポイント：モダンなアプリケーションを作成するためのウェブアプリケーションフレームワークで、Vue.js以外にも様々なライブラリが導入されている。提供されているディレクトリ構成にしたがって処理を追加することで、都度コンフィグを書くことなく開発することができる。


### [App file](https://nuxt.com/docs/guide/directory-structure/app)

キーポイント：Vueインスタンスにおけるルートコンポーネントにあたるコンポーネントを書くことができる。


### [Pages Directory](https://nuxt.com/docs/guide/directory-structure/pages)

キーポイント：[Next.js](https://nextjs.org/docs/routing/introduction)のようなfile-system based routingができる。vue-routerが使われる。


### [Components Directory](https://nuxt.com/docs/guide/directory-structure/components)

キーポイント：Vueコンポーネントを配置することができる。自動的にimportされるので自分でimport文を書く必要がない。


### [Assets Directory](https://nuxt.com/docs/guide/directory-structure/assets)

キーポイント：画像、スタイルシート、フォントなどを配置し読み込むことができる。バンドラー(Webpack、Vite)によって処理される。


### [Public Directory](https://nuxt.com/docs/guide/directory-structure/public)

キーポイント：サーバからファイル名等を保持して配信したいファイルを配置することができる。favicon.ico、robots.txtなど。


### [Server Directory](https://nuxt.com/docs/guide/directory-structure/server)

キーポイント：バックエンドの処理を書くことができる。APIエンドポイントを作成することができる。


### [Composables Directory](https://nuxt.com/docs/guide/directory-structure/composables)

キーポイント：Composition APIによって分離したロジックを配置することができる。自動的にimportされるので自分でimport文を書く必要がない。


### [Data Fetching](https://nuxt.com/docs/getting-started/data-fetching)

キーポイント：データフェッチのための関数が提供されている。


### [State](https://v3.nuxtjs.org/docs/usage/state)

キーポイント： コンポーネントや画面遷移をまたいだ状態の管理をおこなえる関数が提供されている。



## その他


### [スタイルガイド](https://ja.vuejs.org/style-guide/)
