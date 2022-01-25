# 学習資料



## 本ドキュメントの説明

- 学習の参考になるよう各セクションと適切な順序にまとめています
- 公開されているのでいつでも学習活用してください
- セクションごとに対応する公式ドキュメントとその理解の目安となるキーポイントがあります
- キーポイントが分からなければ公式ドキュメントを参照しましょう
- 演習があるセクションもあります
- 注釈は *斜体* で表記します



## Vueの説明


### [Vue.js とは？](https://v3.ja.vuejs.org/guide/introduction.html#vue-js-%E3%81%A8%E3%81%AF)

キーポイント: ユーザーインターフェイスを構築するためのプログレッシブフレームワーク。往年のjQueryのように `<script />` タグで読みこんでVueを使うこともできるし、後述のSFC形式でWebpack、ViteなどによってVueアプリケーションをビルドすることもできる。

*Vueでのアプリケーション開発は、後者の形式でおこなうことがほとんど。前者はフロントエンド部分を既に異なるウェブアプリケーションフレームワークで実装しており、補助的にVueを導入したいケースなどで使われることがある。本資料ではSFCによるVueコンポーネントの記述を前提として説明していく。*



## リアクティブの説明


### [リアクティブの探求](https://v3.ja.vuejs.org/guide/reactivity.html#%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%AE%E6%8E%A2%E6%B1%82)

キーポイント：

1. 値が読み込まれたときに追跡する。 例: val1 + val2 は val1 と val2 の両方を読み込む。
2. 値の変更を検知する。 例: val1 = 3 と入れるとき。
3. 最初に値を読み込んだコードを再実行する。 例: sum = val1 + val2 を再度実行して、 sum の値を更新する。

Vanilla JSでは

1. をやるには改めて変数代入する必要がある
2. をやるには比較演算子によって値が更新されたか判定する必要がある
3. をやるには手続き的に再実行する処理を追加する必要がある

Vueでは 1\. 2\. 3\. を暗黙的に実行してくれる仕組みがあり、これをリアクティブであると表現する。リアクティブであることで値が更新されたときビューの再描画をおこなうこと（データバインディング）ができ、宣言的にUIを記述することができる。

*手続き的にUIの動的処理を書いていた頃と比べ、DOM操作が楽、バグが少なくなる、描画処理が最適化される（再描画頻度、スタイルの計算量など）、といった様々なメリットがある。昨今のフロントエンド開発で用いられるツールには大抵これらの要素が備わっていると考えてよい。*



## Vueの書き方の説明


### [なぜ Composition API なのか？](https://v3.ja.vuejs.org/guide/composition-api-introduction.html#%E3%81%AA%E3%81%9B%E3%82%99-composition-api-%E3%81%AA%E3%81%AE%E3%81%8B)

キーポイント：Options APIだとオブジェクトプロパティとして各処理を書いたり値を初期化したりする。Composition APIは所定の関数を呼び出すことによって各処理を書いたり値を初期化したりする。これにより、再利用可能な処理の分離がしやすくなる。

[mixinsは3でも利用可能](https://v3.ja.vuejs.org/api/options-composition.html#mixins)だが、以下の注釈がある。

> Vue 2 では、コンポーネントロジックの再利用可能なチャンクを作成するための主要なメカニズムがミックスインでした。Vue 3 では、引き続きミックスインがサポートされていますが、コンポーネント間でコードの再利用するには Composition API が推奨されています。

*今はVue 2からVue 3への移行期で、[リアクティブの探求](https://v3.ja.vuejs.org/guide/reactivity.html#%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%AE%E6%8E%A2%E6%B1%82)がそうであるようにOptions APIでのドキュメンテーションとTipsが多々ある。本資料以外で自習する場合は `Composition API` というキーワードを含めて検索するなど工夫が必要。*


## インスタンスの説明


### [アプリケーションとコンポーネントのインスタンス](https://v3.ja.vuejs.org/guide/instance.html#)

キーポイント：すべてのVueアプリケーションは `createApp` でアプリケーションインスタンスを作成する。アプリケーションはルートコンポーネントを持っており、それをマウントすることでDOM上にVueで管理されたビューが表示されるようになる。各コンポーネントもインスタンスを持っている。それぞれのインスタンスはライフサイクルを持っている。

*ルートコンポーネントがあることを知っておくと、自分でVueアプリケーション開発のための環境構築をするときに戸惑わなくてすむ。*



## 単一ファイルコンポーネントの説明


### [単一ファイルコンポーネント](https://v3.ja.vuejs.org/guide/single-file-component.html)

キーポイント：HTML、CSS、JavaScriptを一つのファイルで書くことができる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-style?file=src/App.vue&terminal=dev


### [SFC スタイルの機能](https://v3.ja.vuejs.org/api/sfc-style.html)

キーポイント： `scoped` 属性をもつとコンポーネント内に対してのみスタイルが適用されスタイルをカプセル化できる。 `modules` 属性をもつとCSS Modulesとしてコンパイルされてテンプレートで使用できる。scopedと同じようにスタイルをカプセル化できる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-scoped-css-component?file=src/App.vue&terminal=dev



## テンプレート構文の説明


### [展開](https://v3.ja.vuejs.org/guide/template-syntax.html#%E5%B1%95%E9%96%8B)

キーポイント：Mustache構文でテキスト展開できる。JavaScript式を使用することもできる

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-mustache-setup?file=src/App.vue&terminal=dev


### [ディレクティブ](https://v3.ja.vuejs.org/guide/template-syntax.html#%E3%83%86%E3%82%99%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99)

キーポイント：ディレクティブはVueによって提供される特別な属性。 `v-` から始まる。特定のディレクティブ(v-bindとv-on)は省略記法がある。


### [クラスとスタイルのバインディング](https://v3.ja.vuejs.org/guide/class-and-style.html)

キーポイント：`v-bind` によってオブジェクト構文や配列構文で動的にクラスとスタイルを付与することができる。

演習：[イベントハンドリングのセクション](https://github.com/tuqulore/vue-3-practices/blob/main/LEARNING_MATERIAL.md#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%83%8F%E3%83%B3%E3%83%89%E3%83%AA%E3%83%B3%E3%82%B0)を参照


### [条件付きレンダリング](https://v3.ja.vuejs.org/guide/conditional.html)

キーポイント： `v-if` あるいは `v-show` によって条件に応じてレンダリングする範囲を変更することができる。 `template` 要素に対して使うことでグルーピングすることもできる。 `v-if v-else v-else-if` でレンダリングの条件分岐ができる。 `v-show` は見た目上非表示にするが `v-if` はDOM要素も取り除く。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-v-if?file=src/App.vue&terminal=dev


### [リストレンダリング](https://v3.ja.vuejs.org/guide/list.html)

キーポイント：配列あるいはオブジェクトをもとに反復した要素の表示ができる。要素の再利用と並び替えができるように一意な `key` 属性を渡す必要がある。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-v-for?file=src/App.vue&terminal=dev


### [イベントハンドリング](https://v3.ja.vuejs.org/guide/events.html)

キーポイント：　`v-on` によってDOMイベントの購読、イベント発火時のJavaScriptの実行ができるようになる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-reactive-class-binding-event-handling?file=src/App.vue&terminal=dev


### [フォーム入力バインディング](https://v3.ja.vuejs.org/guide/forms.html)

キーポイント： `v-model` によってformのinput要素やtextarea要素、select要素の入力イベントに応じてデータを更新できるようになる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-v-model?file=src/App.vue&terminal=dev



## コンポーネントの説明


### [コンポーネントの基本](https://v3.ja.vuejs.org/guide/component-basics.html)

キーポイント：コンポーネントという粒度で再利用可能な見た目と機能を管理することができる。

*公式ドキュメントでは[「小さく、自己完結的で、（多くの場合）再利用可能なコンポーネント」](https://v3.ja.vuejs.org/guide/introduction.html#%E3%82%B3%E3%83%B3%E3%83%9B%E3%82%9A%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AB%E3%82%88%E3%82%8B%E6%A7%8B%E6%88%90)とも説明される。どのような表現でも理解できれば差し支えないが、テンプレート、振る舞い、見た目、機能を[抽象化](https://developer.mozilla.org/ja/docs/Glossary/Abstraction)することが目的である。*


### [コンポーネントの構成](https://v3.ja.vuejs.org/guide/component-basics.html#%E3%82%B3%E3%83%B3%E3%83%9B%E3%82%9A%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E6%A7%8B%E6%88%90)

キーポイント：コンポーネントはツリー状に参照関係をもつ。一番上位のコンポーネントはルートコンポーネントであり、Vueインスタンスから呼び出されている。


### [プロパティを用いた子コンポーネントへのデータの受け渡し](https://v3.ja.vuejs.org/guide/component-basics.html#%E3%83%95%E3%82%9A%E3%83%AD%E3%83%8F%E3%82%9A%E3%83%86%E3%82%A3%E3%82%92%E7%94%A8%E3%81%84%E3%81%9F%E5%AD%90%E3%82%B3%E3%83%B3%E3%83%9B%E3%82%9A%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%B8%E3%81%AE%E3%83%86%E3%82%99%E3%83%BC%E3%82%BF%E3%81%AE%E5%8F%97%E3%81%91%E6%B8%A1%E3%81%97)

キーポイント： `props` を使って子コンポーネントへデータを渡すことができる。

演習：[#24](https://github.com/tuqulore/vue-3-practices/issues/24)


### [子コンポーネントのイベントを購読する](https://v3.ja.vuejs.org/guide/component-basics.html#%E5%AD%90%E3%82%B3%E3%83%B3%E3%83%9B%E3%82%9A%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E3%82%A4%E3%83%98%E3%82%99%E3%83%B3%E3%83%88%E3%82%92%E8%B3%BC%E8%AA%AD%E3%81%99%E3%82%8B)

キーポイント：子コンポーネントから発火されたイベントを購読することで子コンポーネントからデータを受け取ることができる。


### [イベントと値を発行する](https://v3.ja.vuejs.org/guide/component-basics.html#%E3%82%A4%E3%83%98%E3%82%99%E3%83%B3%E3%83%88%E3%81%A8%E5%80%A4%E3%82%92%E7%99%BA%E8%A1%8C%E3%81%99%E3%82%8B)

キーポイント：子コンポーネントから発火されたイベントを購読することで子コンポーネントからデータを受け取ることができる。

演習：[#25](https://github.com/tuqulore/vue-3-practices/issues/25)


### [コンポーネントで v-model を使う](https://v3.ja.vuejs.org/guide/component-basics.html#%E3%82%B3%E3%83%B3%E3%83%9B%E3%82%9A%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%A6%E3%82%99-v-model-%E3%82%92%E4%BD%BF%E3%81%86)

キーポイント： `props` とイベントの購読で入力の制御をするときは `v-model` を使うことで簡潔に書くことができる。

演習：[#18](https://github.com/tuqulore/vue-3-practices/issues/18)

*DOM要素の `v-model` とVueコンポーネントの `v-model` で用いられるプロパティ名とイベント名が異なることに注意。また、実は[複数のv-modelをバインディング](https://v3.ja.vuejs.org/guide/component-custom-events.html#%E8%A4%87%E6%95%B0%E3%81%AE-v-model-%E3%81%AE%E3%83%8F%E3%82%99%E3%82%A4%E3%83%B3%E3%83%86%E3%82%99%E3%82%A3%E3%83%B3%E3%82%AF%E3%82%99)することもできる。コンポーネントを呼び出す際に記述量が少なくなるので活用したい。*


### [スロットによるコンテンツ配信](https://v3.ja.vuejs.org/guide/component-basics.html#%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88%E3%81%AB%E3%82%88%E3%82%8B%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E9%85%8D%E4%BF%A1)

キーポイント： `slots` によってコンポーネントの子階層に直接テンプレートを渡すことができる

*[名前付きスロット](https://v3.ja.vuejs.org/guide/component-slots.html#%E5%90%8D%E5%89%8D%E4%BB%98%E3%81%8D%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88)を使うことで複雑なレイアウトを含んだコンポーネントにテンプレートを渡しやすくすることもできる。*


### [単方向データフロー](https://v3.ja.vuejs.org/guide/component-props.html#%E5%8D%98%E6%96%B9%E5%90%91%E3%83%86%E3%82%99%E3%83%BC%E3%82%BF%E3%83%95%E3%83%AD%E3%83%BC)

キーポイント：`props` は親→子へデータが更新されることはあっても子→親へデータが更新されてはならない（することができない）。 `props` の値を変更したい場合は `props` の値を初期値としたリアクティブな参照を別に作成する。`props` の値を保持したい場合は `computed` などを使用する。

演習：[#24](https://github.com/tuqulore/vue-3-practices/issues/24)


### [プロパティのバリデーション](https://v3.ja.vuejs.org/guide/component-props.html#%E3%83%95%E3%82%9A%E3%83%AD%E3%83%8F%E3%82%9A%E3%83%86%E3%82%A3%E3%81%AE%E3%83%8F%E3%82%99%E3%83%AA%E3%83%86%E3%82%99%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3)

キーポイント： `props` はどんな値を受け取るか制約を設けることができる。

*もしプロパティのバリデーションを設定しなければ、自身でバリデーション処理を書く必要がある。どんなプロパティを受け付けたいか表明することにもなるので積極的に設定したい。*



## Composition APIでの書き方の概要


### [setup コンポーネントオプション](https://v3.ja.vuejs.org/guide/composition-api-introduction.html#setup-%E3%82%B3%E3%83%B3%E3%83%9B%E3%82%9A%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%AA%E3%83%95%E3%82%9A%E3%82%B7%E3%83%A7%E3%83%B3)

キーポイント：`props` と `context` を引数にとる。コンポーネント作成前に `props` をリアクティブに参照可能な状態で処理を書くことができる。


### [ref によるリアクティブな変数](https://v3.ja.vuejs.org/guide/composition-api-introduction.html#ref-%E3%81%AB%E3%82%88%E3%82%8B%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%AA%E5%A4%89%E6%95%B0)

キーポイント： `ref` によってリアクティブな参照を作成できる。

*後述でリアクティブな参照のさまざまな作り方を学ぶが、まずは `ref` を使えば問題ないと思ってもらってよい。*


### [ ライフサイクルフックを setup の中に登録する](https://v3.ja.vuejs.org/guide/composition-api-introduction.html#ref-%E3%81%AB%E3%82%88%E3%82%8B%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%AA%E5%A4%89%E6%95%B0)

キーポイント：コンポーネントの各ライフサイクルによって必要な処理をライフサイクルフックによって書くことができる。

演習：[#17](https://github.com/tuqulore/vue-3-practices/issues/17)


### [watch で変化に反応する](https://v3.ja.vuejs.org/guide/composition-api-introduction.html#watch-%E3%81%A6%E3%82%99%E5%A4%89%E5%8C%96%E3%81%AB%E5%8F%8D%E5%BF%9C%E3%81%99%E3%82%8B)

キーポイント：リアクティブな参照に対して値に変化が生じたときに必要な処理を `watch` 関数によって書くことができる。 `props` をリアクティブな参照にするには `toRefs` を使用する。


### [スタンドアロンな computed プロパティ](https://v3.ja.vuejs.org/guide/composition-api-introduction.html#%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%88%E3%82%99%E3%82%A2%E3%83%AD%E3%83%B3%E3%81%AA-computed-%E3%83%95%E3%82%9A%E3%83%AD%E3%83%8F%E3%82%9A%E3%83%86%E3%82%A3)

キーポイント：リアクティブな参照をもとに読み取り専用の計算済みの値を `computed` 関数によって生成することができる。

演習： [#20](https://github.com/tuqulore/vue-3-practices/issues/20)

*自分でリアクティブな参照に対して再計算する処理をおこなうと、処理の呼び出しごとに再計算される。 `computed` 関数を使うことで計算に必要な値が変化するごとに再計算される。パフォーマンスの観点では後者の方が効率がよい。*



## Composition APIでの書き方の詳細


### [リアクティブの基礎](https://v3.ja.vuejs.org/guide/reactivity-fundamentals.html)

キーポイント：

- オブジェクトをリアクティブにしたければ `reactive` を使う
- 値をリアクティブにしたければ `ref` を使う
- オブジェクトから分割代入でリアクティブな値を取り出したければ `toRefs` を使う
- リアクティブなまま読み込み専用にしたければ `readonly` を使う


### [算出プロパティとウォッチ](https://v3.ja.vuejs.org/guide/reactivity-computed-watchers.html)

キーポイント： `computed` はgetterとsetterを定義することもできる。リアクティブな値をトリガーとした副作用のある処理は `watchEffect` で書くこともできる。

演習： [#20](https://github.com/tuqulore/vue-3-practices/issues/20)


### [セットアップ](https://v3.ja.vuejs.org/guide/composition-api-setup.html)

キーポイント： `props` はリアクティブだけど `context` はリアクティブではない。 `setup` 関数でreturnした値、関数などがテンプレートで使用可能。

演習：[#16](https://github.com/tuqulore/vue-3-practices/issues/16)


### [ライフサイクルフック](https://v3.ja.vuejs.org/guide/composition-api-lifecycle-hooks.html)

キーポイント：ライフサイクルフックの一覧、Options APIとの比較

演習：[#17](https://github.com/tuqulore/vue-3-practices/issues/17)



## [SFC <script setup>](https://v3.ja.vuejs.org/api/sfc-script-setup.html) *(Optional)*

キーポイント： `setup` 関数の中に書くコードを `script` ブロック直下に書けるようになる。トップレベルでインポートしたり変数宣言したものはテンプレートで使用できる。


### [defineProps と defineEmits](https://v3.ja.vuejs.org/api/sfc-script-setup.html#defineprops-%E3%81%A8-defineemits)

キーポイント： `setup` 関数に渡されていた `props` と `context.emit` に相当するプロパティの参照とイベントの発火は `defineProps` と `defineEmits` によって宣言しておこなうことができる。

*記述量が少なくできるので便利だが、本ドキュメントとしては紹介するにとどめる。もちろん学習者が積極的に使ってもよい。*



## テンプレート参照 *(Optional)*


### [テンプレート参照について](https://v3.ja.vuejs.org/guide/component-template-refs.html)

キーポイント：特定のDOM要素や子コンポーネントを直接操作したり値を得ることができる。


### [テンプレート参照](https://v3.ja.vuejs.org/guide/composition-api-template-refs.html)

キーポイント：テンプレートに対するリアクティブな参照を作成することができる。



## Provide / inject


### [Provide / inject](https://v3.ja.vuejs.org/guide/component-provide-inject.html)

キーポイント： `props` は直下の子コンポーネントに対してしかデータを渡すことができないが、 `provide` と `inject` を使うと `provider` を持つコンポーネントの子孫コンポーネントは `inject` でデータを受け取ることができる。

*本ドキュメントでは取り扱わないがコンポーネントの参照関係に制約されずデータを取得、更新する（状態管理）ライブラリもある。[Pinia](https://pinia.vuejs.org/)など参照されたい。*


### [Provide / Inject](https://v3.ja.vuejs.org/guide/composition-api-provide-inject.html)

キーポイント： `setup` 関数で `provide` `inject` を使う場合はインポートして使うこと。 `provide` する値は `reactive` または `ref` でリアクティブにすることができる。



## スケールアップ


### [ルーティング](https://v3.ja.vuejs.org/guide/routing.html)

キーポイント：vue-routerを使うことで画面遷移処理を書くことができる。

演習：[#27](https://github.com/tuqulore/vue-3-practices/issues/27)


### [セキュリティ](https://v3.ja.vuejs.org/guide/security.html)

キーポイント：テンプレートは適切にエスケープ処理されたりしている。セキュリティ上注意すべき点がかかれている



## Nuxtの説明


### [What is Nuxt?](https://v3.nuxtjs.org/concepts/introduction)

キーポイント：モダンなアプリケーションを作成するためのウェブアプリケーションフレームワークで、Vue.js以外にも様々なライブラリが導入されている。提供されているディレクトリ構成にしたがって処理を追加することで、都度コンフィグを書くことなく開発することができる。


### [App file](https://v3.nuxtjs.org/docs/directory-structure/app/)

キーポイント：Vueインスタンスにおけるルートコンポーネントにあたるコンポーネントを書くことができる。


### [Pages directory](https://v3.nuxtjs.org/docs/directory-structure/pages)

キーポイント：[Next.js](https://nextjs.org/docs/routing/introduction)のようなfile-system based routingができる。vue-routerが使われる。


### [Components directory](https://v3.nuxtjs.org/docs/directory-structure/components)

キーポイント：Vueコンポーネントを配置することができる。自動的にimportされるので自分でimport文を書く必要がない。


### [Assets directory](https://v3.nuxtjs.org/docs/directory-structure/assets)

キーポイント：画像、スタイルシート、フォントなどを配置し読み込むことができる。バンドラー(Webpack、Vite)によって処理される。


### [Public directory](https://v3.nuxtjs.org/docs/directory-structure/public)

キーポイント：サーバからファイル名等を保持して配信したいファイルを配置することができる。favicon.ico、robots.txtなど。


### [Server directory](https://v3.nuxtjs.org/docs/directory-structure/server)

キーポイント：バックエンドの処理を書くことができる。APIエンドポイントを作成することができる。


### [Composables directory](https://v3.nuxtjs.org/docs/directory-structure/composables)

キーポイント：Composition APIによって分離したロジックを配置することができる。自動的にimportされるので自分でimport文を書く必要がない。


### [Data Fetching](https://v3.nuxtjs.org/docs/usage/data-fetching)

キーポイント：データフェッチのための関数が提供されている。


### [State](https://v3.nuxtjs.org/docs/usage/state)

キーポイント： `ref` を置き換えるようなコンポーネントをまたいだ状態の管理をおこなえる関数が提供されている。



## その他


### データフェッチ

[ky](https://github.com/sindresorhus/ky)などのライブラリを使用してリアクティブな値に格納する。

演習：[#28](https://github.com/tuqulore/vue-3-practices/issues/28)


### パフォーマンスチューニング

[lodash/debounce](https://lodash.com/docs/#debounce)などのライブラリを使用して入力イベントなど高頻度のイベント発火を間引くことで再描画の頻度をへらし、描画負荷を軽減することができる。

演習：[#15](https://github.com/tuqulore/vue-3-practices/issues/15)

### [2.x からの破壊的変更の一覧](https://v3.ja.vuejs.org/guide/migration/introduction.html#%E7%A0%B4%E5%A3%8A%E7%9A%84%E5%A4%89%E6%9B%B4)
