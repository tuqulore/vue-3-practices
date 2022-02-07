# 学習資料



## 本資料の説明

- 学習の参考になるよう各セクションと適切な順序にまとめています
- 公開されているのでいつでも学習活用してください
- セクションごとに対応する公式ドキュメントとその理解の目安となるキーポイントがあります
- 自習時にキーポイントが分からなければ公式ドキュメントを参照しましょう
- 逆に言えば公式ドキュメントは詳細に立ち入った説明がありますがキーポイントが分かれば十分です
- 注釈は *斜体* で表記します
- 演習があるセクションは10分の演習時間を設けます
- セクションの変わり目にはサポーターからの補足と質問タイムを設けます



## Vueの説明


### [Vue.js とは？](https://v3.ja.vuejs.org/guide/introduction.html#vue-js-%E3%81%A8%E3%81%AF)

- `Vue (発音は /vju:/、view と同様) は、ユーザーインターフェイスを構築するためのプログレッシブフレームワークです。` ～
- `公式ガイドは、HTML、CSS そして JavaScript に関する中級レベルの知識を前提としています。` ～
- `Vue.js を試すには、Hello World の例 (opens new window)が最も簡単です。気軽に別のタブで開いて、基本的な例を試してみましょう。`
- `Vue.js のコアは、単純なテンプレート構文を使って宣言的にデータを DOM にレンダリングすることを可能にするシステムです:` ～
- ～ `以下の例で、counter プロパティが 1 秒ごとにインクリメントされたとき、レンダリングされた DOM がどのように変化するかを見てみましょう:`

キーポイント: ユーザーインターフェイスを構築するためのプログレッシブ（漸進的）フレームワーク。HTMLページ上で `script` タグで読み込みVueを使うこともできるし、後述のSFC形式でWebpack、ViteなどによってVueアプリケーションをビルドすることもできる。

*Vueでのアプリケーション開発は、後者の形式でおこなうことがほとんど。前者はフロントエンド部分を既に異なるウェブアプリケーションフレームワークで実装しており、補助的にVueを導入したいケースなどで使われることがある。本資料ではSFCによるVueコンポーネントの記述を前提として説明していく。*



## リアクティブの説明


### [リアクティブの探求](https://v3.ja.vuejs.org/guide/reactivity.html#%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%AE%E6%8E%A2%E6%B1%82)

- `さらに深く見ていきましょう！Vue の最大の特徴の 1 つは、控えめなリアクティブシステムです。モデルはプロキシされた JavaScript オブジェクトです。` ～
- `この言葉はここ最近のプログラミングで頻繁に目にしますが、それについて言及される時どういう意味で使われているでしょうか？` ～
- ～ `前の例のコードを使って直接これを行うことはできません`
- [Vue が変更をどのように追跡するのか](https://v3.ja.vuejs.org/guide/reactivity.html#vue-%E3%81%8B%E3%82%99%E5%A4%89%E6%9B%B4%E3%82%92%E3%81%A8%E3%82%99%E3%81%AE%E3%82%88%E3%81%86%E3%81%AB%E8%BF%BD%E8%B7%A1%E3%81%99%E3%82%8B%E3%81%AE%E3%81%8B) 全体

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



## Vueの書き方の説明


### [なぜ Composition API なのか？](https://v3.ja.vuejs.org/guide/composition-api-introduction.html#%E3%81%AA%E3%81%9B%E3%82%99-composition-api-%E3%81%AA%E3%81%AE%E3%81%8B)

- `Vue コンポーネントを作成するとその機能と結合されたインターフェースの繰り返し可能な部分を再利用可能なコードとして抽出することができます。` ～
- `このコンポーネントには複数の責務が存在します:` ～
- ～ `同じ論理的な関心事に関連するコードを並べることができれば、より良くなるでしょう。そして、これはまさに Composition API が可能にします。`

キーポイント：Options APIだとオブジェクトプロパティとして各処理を書いたり値を初期化したりする。Composition APIは所定の関数を呼び出すことによって各処理を書いたり値を初期化したりする。これにより、再利用可能な処理の分離がしやすくなる。

[mixinsは3でも利用可能](https://v3.ja.vuejs.org/api/options-composition.html#mixins)だが、以下の注釈がある。

> Vue 2 では、コンポーネントロジックの再利用可能なチャンクを作成するための主要なメカニズムがミックスインでした。Vue 3 では、引き続きミックスインがサポートされていますが、コンポーネント間でコードの再利用するには Composition API が推奨されています。

*今はVue 2からVue 3への移行期で、[リアクティブの探求](https://v3.ja.vuejs.org/guide/reactivity.html#%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%AE%E6%8E%A2%E6%B1%82)がそうであるようにOptions APIでのドキュメンテーションとTipsが多々ある。本資料以外で自習する場合は `Composition API` というキーワードを含めて検索するなど工夫が必要。*


## インスタンスの説明


### [アプリケーションとコンポーネントのインスタンス](https://v3.ja.vuejs.org/guide/instance.html#)

- `全ての Vue アプリケーションは createApp 関数で新しい アプリケーションインスタンス (application instance) を作成するところから始まります:` ～
- `createApp に渡されたオプションは、ルートコンポーネント の設定に使われます。` ～
- ～ `とりあえず、 ルートコンポーネントは他のコンポーネントとはなにも違いはないことを認識しておいてください。設定オプションは同じで、対応するコンポーネントインスタンスの振る舞いも同じです。`

キーポイント：すべてのVueアプリケーションは `createApp` でアプリケーションインスタンスを作成する。アプリケーションはルートコンポーネントを持っており、それをマウントすることでDOM上にVueで管理されたビューが表示されるようになる。各コンポーネントもインスタンスを持っている。それぞれのインスタンスはライフサイクルを持っている。

*ルートコンポーネントがあることを知っておくと、自分でVueアプリケーション開発のための環境構築をするときに戸惑わなくてすむ。*



## 単一ファイルコンポーネントの説明


### [単一ファイルコンポーネント](https://v3.ja.vuejs.org/guide/single-file-component.html)

- `Vue 単一ファイルコンポーネント（別名 *.vue ファイル、 SFC と省略）は、Vue コンポーネントのテンプレート、ロジック、そして スタイル を 1 つのファイルにまとめることができる特別なファイル形式です。` ～
- `Vue SFC はフレームワーク固有のファイル形式で、@vue/compiler-sfc (opens new window)によって標準的な JavaScript と CSS にプリコンパイルする必要があります。` ～
- `SFC ビルドのステップが必要ですが、その代わりに多くの利点があります:` ～
- `従来のウェブ開発のバックグラウンドを持つユーザの中には、SFC は HTML/CSS/JS が分離するはずだった異なる関心を同じ場所で混ぜ合わせているのでは、と懸念する人もいるかもしれません。` ～

キーポイント：HTML、CSS、JavaScriptを一つのファイルで書くことができる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-style?file=src/App.vue&terminal=dev


### [SFC スタイルの機能](https://v3.ja.vuejs.org/api/sfc-style.html)

- `<style> タグが scoped 属性を持つとき、その CSS は現在のコンポーネントの要素にだけ適用されます。` ～
- `scoped を使うと、親コンポーネントのスタイルは子コンポーネントに漏れません。しかし、子コンポーネントのルートノードは、親スコープの CSS と子スコープの CSS の両方が影響を受けます。` ～
- `スコープ付きとスコープなしのスタイルの両方を同じコンポーネントに含めることもできます:` ～
- `スコープ付きスタイルでもクラスが不要になるわけではないです。` ～
- `<style module> タグは CSS Modules (opens new window)としてコンパイルされ、結果として得られる CSS クラスを $style というキーの下にオブジェクトとしてコンポーネントに公開します:` ～
- ～ `この結果として得られるクラスは、衝突を避けるためにハッシュ化され、CSS を現在のコンポーネントだけにスコープするのと同じ効果を実現します。`

キーポイント： `scoped` 属性をもつとコンポーネント内に対してのみスタイルが適用されスタイルをカプセル化できる。 `modules` 属性をもつとCSS Modulesとしてコンパイルされてテンプレートで使用できる。scopedと同じようにスタイルをカプセル化できる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-scoped-css-component?file=src/App.vue&terminal=dev



## 系統学習に必要なComposition APIでの書き方の説明


### [setup コンポーネントオプション](https://v3.ja.vuejs.org/guide/composition-api-introduction.html#setup-%E3%82%B3%E3%83%B3%E3%83%9B%E3%82%9A%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%AA%E3%83%95%E3%82%9A%E3%82%B7%E3%83%A7%E3%83%B3)

キーポイント：`props` と `context` を引数にとる。コンポーネント作成前に `props` をリアクティブに参照可能な状態で処理を書くことができる。


### [ref によるリアクティブな変数](https://v3.ja.vuejs.org/guide/composition-api-introduction.html#ref-%E3%81%AB%E3%82%88%E3%82%8B%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%AA%E5%A4%89%E6%95%B0)

キーポイント： `ref` によってリアクティブな参照を作成できる。

*後述でリアクティブな参照のさまざまな作り方を学ぶが、まずは `ref` を使えば問題ないと思ってもらってよい。*



## テンプレート構文の説明


### [展開](https://v3.ja.vuejs.org/guide/template-syntax.html#%E5%B1%95%E9%96%8B)

- `データバインディングのもっとも基本的な形は、"Mustache" 構文(二重中括弧)を利用したテキスト展開です:` ～
- `2 重中括弧の mustaches は、データを HTML ではなく、プレーンなテキストとして扱います。実際の HTML として出力するためには、v-html ディレクティブを使用する必要があります:` ～
- `XSS 脆弱性 (opens new window)を容易に引き起こすので、ウェブサイトで動的に任意の HTML をレンダリングすることは、非常に危険です。` ～
- `Mustache は、HTML 属性の内部で使用することはできません。代わりに、v-bind ディレクティブを使用してください:` ～
- `属性が単に存在していることを true と示すといった真偽値属性の場合、v-bind は少し異なった働きをします。例えば:` ～
- `これまで、テンプレートに単純なキーをバインディングしてきました。実際には Vue.js は全てのデータバインディング内部で JavaScript 式を完全にサポートします:` ～
- ～ `制限として、それぞれのバインディングは、単一の式だけ含むことができるというものです。なので、以下は動作しません:`

キーポイント：Mustache構文でテキスト展開できる。JavaScript式を使用することもできる

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-mustache-setup?file=src/App.vue&terminal=dev


### [ディレクティブ](https://v3.ja.vuejs.org/guide/template-syntax.html#%E3%83%86%E3%82%99%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99)

- `ディレクティブは v- から始まる特別な属性です。ディレクティブ属性値は、単一の JavaScript 式を期待します` ～
- `ディレクティブの中には "引数" を取るものもあります。` ～
- ～ `ここでの引数は受け取りたいイベント名です。イベントハンドリングの詳細については後ほど説明します。`
- `v- 接頭辞は、テンプレート内の Vue 独自の属性を識別するための目印となっています。` ～
- ～ `省略記法の構文の利用は完全に任意ですが、後でその使用方法について詳しく学んだ時に便利と感じることでしょう。`

キーポイント：ディレクティブはVueによって提供される特別な属性。 `v-` から始まる。特定のディレクティブ(v-bindとv-on)は省略記法がある。


### [クラスとスタイルのバインディング](https://v3.ja.vuejs.org/guide/class-and-style.html)

- `データバインディングに一般に求められることの 1 つは、要素のクラスリストとインラインスタイルを操作することです。` ～
- `:class (v-bind:class の略) にオブジェクトを渡すことでクラスを動的に切り替えることができます:` ～
- `束縛されるオブジェクトはインラインでなくてもかまいません:` ～
- `:class に配列を渡してクラスのリストを適用することができます:` ～
- `:style 向けのオブジェクト構文は非常に簡単です。JavaScript オブジェクトということを除けば、ほとんど CSS のように見えます。` ～
- `:style 向けの配列構文は、同じ要素に複数のスタイルオブジェクトを適用することができます:` ～

キーポイント：`v-bind` によってオブジェクト構文や配列構文で動的にクラスとスタイルを付与することができる。

演習：[イベントハンドリングのセクション](https://github.com/tuqulore/vue-3-practices/blob/main/LEARNING_MATERIAL.md#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%83%8F%E3%83%B3%E3%83%89%E3%83%AA%E3%83%B3%E3%82%B0)を参照


### [条件付きレンダリング](https://v3.ja.vuejs.org/guide/conditional.html)

- `v-if ディレクティブは、ブロックを条件に応じてレンダリングしたい場合に使用されます。` ～
- `v-if はディレクティブなので、単一の要素に付加する必要があります。しかし、1 要素よりも多くの要素と切り替えたい場合はどうでしょうか？` ～
- `v-if に対して "else block" を示すために、v-else ディレクティブを使用できます:` ～
- `v-else-if は、名前が示唆するように、v-if の "else if block" として機能します。また、複数回連結することもできます:` ～
- `条件的に要素を表示するための別のオプションは v-show です。使用方法はほとんど同じです:` ～
- `v-if は、イベントリスナと子コンポーネント内部の条件ブロックが適切に破棄され、そして切り替えられるまでの間再作成されるため、”リアル”な条件レンダリングです。` ～
- ～ `とても頻繁に何かを切り替える必要があれば v-show を選び、条件が実行時に変更することがほとんどない場合は、v-if を選びます。`

キーポイント： `v-if` あるいは `v-show` によって条件に応じてレンダリングする範囲を変更することができる。 `template` 要素に対して使うことでグルーピングすることもできる。 `v-if v-else v-else-if` でレンダリングの条件分岐ができる。 `v-show` は見た目上非表示にするが `v-if` はDOM要素も取り除く。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-v-if?file=src/App.vue&terminal=dev


### [リストレンダリング](https://v3.ja.vuejs.org/guide/list.html)

- `配列に基づいて、アイテムのリストをレンダリングするために、v-for ディレクティブを使用することができます。 ` ～
- `v-for ブロック内では、親スコープのプロパティへの完全なアクセスを持っています。` ～
- `オブジェクトのプロパティに対して、v-for を使って反復処理することもできます。` ～
- `Vue が v-for でレンダリングされた要素のリストを更新する際、デフォルトでは “その場でパッチを適用する” (in-place patch) 戦略が用いられます。` ～
- `Vue は画面の更新もトリガするために、監視された配列の変更メソッドをラップします。` ～
- ～ `重複するオブジェクトを含んでいる別の配列で元の配列を置き換えることは、とても効率的な操作です。`
- `v-for は整数値を取ることもできます。` ～
- `テンプレート v-if と同様に、複数の要素のブロックをレンダリングするために、 v-for で <template> タグを使うこともできます。` ～

キーポイント：配列あるいはオブジェクトをもとに反復した要素の表示ができる。要素の再利用と並び替えができるように一意な `key` 属性を渡す必要がある。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-v-for?file=src/App.vue&terminal=dev

*オブジェクトのリストレンダリングは[Object.entries()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)をイメージしてもらってよい。利用頻度としては配列のリスとレンダリングをおこなうことがほとんど。*


### [イベントハンドリング](https://v3.ja.vuejs.org/guide/events.html)

- `v-on ディレクティブを使うことで、DOM イベントの購読、イベント発火時の JavaScript の実行が可能になります。` ～
- `多くのイベントハンドラのロジックはより複雑になっていくので、v-on 属性の値に JavaScript 式を記述し続けるのは現実的ではありません。` ～
- `メソッド名を直接指定する代わりに、インライン JavaScript 式でメソッドを指定することもできます:` ～

キーポイント：　`v-on` によってDOMイベントの購読、イベント発火時のJavaScriptの実行ができるようになる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-reactive-class-binding-event-handling?file=src/App.vue&terminal=dev


### [フォーム入力バインディング](https://v3.ja.vuejs.org/guide/forms.html)

- `form の input 要素や textarea 要素、 select 要素に双方向データバインディングを付与するためには、v-model を使用することができます。` ～
- `ラジオやチェックボックス、セレクトの option において、v-model でバインディングされる値は通常は静的な文字列（チェックボックスの場合は boolean も）です:` ～
- `デフォルトでは v-model は各 input イベント後に入力値とデータを同期します（上述の IME 入力の例外はあります）。lazy 修飾子を加えることで、change イベント後に同期するよう変更できます。` ～
- ～ `ユーザ入力から空白を自動で取り除きたい場合は、v-model で管理している input に trim 修飾子を加えることができます。`

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

演習：[単方向データフローのセクション](https://github.com/tuqulore/vue-3-practices/blob/main/LEARNING_MATERIAL.md#%E5%8D%98%E6%96%B9%E5%90%91%E3%83%87%E3%83%BC%E3%82%BF%E3%83%95%E3%83%AD%E3%83%BC)を参照


### [子コンポーネントのイベントを購読する](https://v3.ja.vuejs.org/guide/component-basics.html#%E5%AD%90%E3%82%B3%E3%83%B3%E3%83%9B%E3%82%9A%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E3%82%A4%E3%83%98%E3%82%99%E3%83%B3%E3%83%88%E3%82%92%E8%B3%BC%E8%AA%AD%E3%81%99%E3%82%8B)

キーポイント：子コンポーネントから発火されたイベントを購読することで子コンポーネントからデータを受け取ることができる。


### [イベントと値を発行する](https://v3.ja.vuejs.org/guide/component-basics.html#%E3%82%A4%E3%83%98%E3%82%99%E3%83%B3%E3%83%88%E3%81%A8%E5%80%A4%E3%82%92%E7%99%BA%E8%A1%8C%E3%81%99%E3%82%8B)

キーポイント：子コンポーネントから発火されたイベントを購読することで子コンポーネントからデータを受け取ることができる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-emit-event-handling?file=src/App.vue&terminal=dev


### [コンポーネントで v-model を使う](https://v3.ja.vuejs.org/guide/component-basics.html#%E3%82%B3%E3%83%B3%E3%83%9B%E3%82%9A%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%A6%E3%82%99-v-model-%E3%82%92%E4%BD%BF%E3%81%86)

キーポイント： `props` とイベントの購読で入力の制御をするときは `v-model` を使うことで簡潔に書くことができる。

演習：[単方向データフローのセクション](https://github.com/tuqulore/vue-3-practices/blob/main/LEARNING_MATERIAL.md#%E5%8D%98%E6%96%B9%E5%90%91%E3%83%87%E3%83%BC%E3%82%BF%E3%83%95%E3%83%AD%E3%83%BC)を参照

*DOM要素の `v-model` とVueコンポーネントの `v-model` で用いられるプロパティ名とイベント名が異なることに注意。また、実は[複数のv-modelをバインディング](https://v3.ja.vuejs.org/guide/component-custom-events.html#%E8%A4%87%E6%95%B0%E3%81%AE-v-model-%E3%81%AE%E3%83%8F%E3%82%99%E3%82%A4%E3%83%B3%E3%83%86%E3%82%99%E3%82%A3%E3%83%B3%E3%82%AF%E3%82%99)することもできる。コンポーネントを呼び出す際に記述量が少なくなるので活用したい。*


### [スロットによるコンテンツ配信](https://v3.ja.vuejs.org/guide/component-basics.html#%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88%E3%81%AB%E3%82%88%E3%82%8B%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E9%85%8D%E4%BF%A1)

キーポイント： `slots` によってコンポーネントの子階層に直接テンプレートを渡すことができる

*[名前付きスロット](https://v3.ja.vuejs.org/guide/component-slots.html#%E5%90%8D%E5%89%8D%E4%BB%98%E3%81%8D%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88)を使うことで複雑なレイアウトを含んだコンポーネントにテンプレートを渡しやすくすることもできる。*

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-slot?file=src/App.vue&terminal=dev


### [プロパティのバリデーション](https://v3.ja.vuejs.org/guide/component-props.html#%E3%83%95%E3%82%9A%E3%83%AD%E3%83%8F%E3%82%9A%E3%83%86%E3%82%A3%E3%81%AE%E3%83%8F%E3%82%99%E3%83%AA%E3%83%86%E3%82%99%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3)

キーポイント： `props` はどんな値を受け取るか制約を設けることができる。

*もしプロパティのバリデーションを設定しなければ、自身でバリデーション処理を書く必要がある。どんなプロパティを受け付けたいか表明することにもなるので積極的に設定したい。*

演習：[単方向データフローのセクション](https://github.com/tuqulore/vue-3-practices/blob/main/LEARNING_MATERIAL.md#%E5%8D%98%E6%96%B9%E5%90%91%E3%83%87%E3%83%BC%E3%82%BF%E3%83%95%E3%83%AD%E3%83%BC)を参照


### [単方向データフロー](https://v3.ja.vuejs.org/guide/component-props.html#%E5%8D%98%E6%96%B9%E5%90%91%E3%83%86%E3%82%99%E3%83%BC%E3%82%BF%E3%83%95%E3%83%AD%E3%83%BC)

キーポイント：`props` は親→子へデータが更新されることはあっても子→親へデータが更新されてはならない（することができない）。 `props` の値を変更したい場合は `props` の値を初期値としたリアクティブな参照を別に作成する。`props` の値を保持したい場合は `computed` などを使用する。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-reactive-props-component-v-model?file=src/App.vue&terminal=dev



## Composition APIでの書き方の概要


### [ ライフサイクルフックを setup の中に登録する](https://v3.ja.vuejs.org/guide/composition-api-introduction.html#ref-%E3%81%AB%E3%82%88%E3%82%8B%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%AA%E5%A4%89%E6%95%B0)

キーポイント：コンポーネントの各ライフサイクルによって必要な処理をライフサイクルフックによって書くことができる。

演習：[ライフサイクルフックのセクション](https://github.com/tuqulore/vue-3-practices/blob/main/LEARNING_MATERIAL.md#%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB%E3%83%95%E3%83%83%E3%82%AF)を参照


### [watch で変化に反応する](https://v3.ja.vuejs.org/guide/composition-api-introduction.html#watch-%E3%81%A6%E3%82%99%E5%A4%89%E5%8C%96%E3%81%AB%E5%8F%8D%E5%BF%9C%E3%81%99%E3%82%8B)

キーポイント：リアクティブな参照に対して値に変化が生じたときに必要な処理を `watch` 関数によって書くことができる。 `props` をリアクティブな参照にするには `toRefs` を使用する。


### [スタンドアロンな computed プロパティ](https://v3.ja.vuejs.org/guide/composition-api-introduction.html#%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%88%E3%82%99%E3%82%A2%E3%83%AD%E3%83%B3%E3%81%AA-computed-%E3%83%95%E3%82%9A%E3%83%AD%E3%83%8F%E3%82%9A%E3%83%86%E3%82%A3)

キーポイント：リアクティブな参照をもとに読み取り専用の計算済みの値を `computed` 関数によって生成することができる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-computed?file=src/App.vue&terminal=dev

*自分でリアクティブな参照に対して再計算する処理をおこなうと、処理の呼び出しごとに再計算される。 `computed` 関数を使うことで計算に必要な値が変化するごとに再計算される。パフォーマンスの観点では後者の方が効率がよい。*



## Composition APIでの書き方の詳細 *(Optional)*


### [リアクティブの基礎](https://v3.ja.vuejs.org/guide/reactivity-fundamentals.html)

キーポイント：

- オブジェクトをリアクティブにしたければ `reactive` を使う
- 値をリアクティブにしたければ `ref` を使う
- オブジェクトから分割代入でリアクティブな値を取り出したければ `toRefs` を使う
- リアクティブなまま読み込み専用にしたければ `readonly` を使う


### [算出プロパティとウォッチ](https://v3.ja.vuejs.org/guide/reactivity-computed-watchers.html)

キーポイント： `computed` はgetterとsetterを定義することもできる。リアクティブな値をトリガーとした副作用のある処理は `watchEffect` で書くこともできる。


### [セットアップ](https://v3.ja.vuejs.org/guide/composition-api-setup.html)

キーポイント： `props` はリアクティブだけど `context` はリアクティブではない。 `setup` 関数でreturnした値、関数などがテンプレートで使用可能。


### [ライフサイクルフック](https://v3.ja.vuejs.org/guide/composition-api-lifecycle-hooks.html)

キーポイント：ライフサイクルフックの一覧、Options APIとの比較

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-mounted?file=src/App.vue&terminal=dev



## [SFC <script setup>](https://v3.ja.vuejs.org/api/sfc-script-setup.html) *(Optional)*

キーポイント： `setup` 関数の中に書くコードを `script` ブロック直下に書けるようになる。トップレベルでインポートしたり変数宣言したものはテンプレートで使用できる。


### [defineProps と defineEmits](https://v3.ja.vuejs.org/api/sfc-script-setup.html#defineprops-%E3%81%A8-defineemits)

キーポイント： `setup` 関数に渡されていた `props` と `context.emit` に相当するプロパティの参照とイベントの発火は `defineProps` と `defineEmits` によって宣言しておこなうことができる。

*記述量が少なくできるので便利だが、本資料としては紹介するにとどめる。もちろん学習者が積極的に使ってもよい。*



## テンプレート参照 *(Optional)*


### [テンプレート参照について](https://v3.ja.vuejs.org/guide/component-template-refs.html)

キーポイント：特定のDOM要素や子コンポーネントを直接操作したり値を得ることができる。


### [テンプレート参照](https://v3.ja.vuejs.org/guide/composition-api-template-refs.html)

キーポイント：テンプレートに対するリアクティブな参照を作成することができる。



## Provide / inject


### [Provide / inject](https://v3.ja.vuejs.org/guide/component-provide-inject.html)

キーポイント： `props` は直下の子コンポーネントに対してしかデータを渡すことができないが、 `provide` と `inject` を使うと `provider` を持つコンポーネントの子孫コンポーネントは `inject` でデータを受け取ることができる。

*本資料では取り扱わないがコンポーネントの参照関係に制約されずデータを取得、更新する（状態管理）ライブラリもある。[Pinia](https://pinia.vuejs.org/)など参照されたい。*


### [Provide / Inject](https://v3.ja.vuejs.org/guide/composition-api-provide-inject.html)

キーポイント： `setup` 関数で `provide` `inject` を使う場合はインポートして使うこと。 `provide` する値は `reactive` または `ref` でリアクティブにすることができる。



## スケールアップ


### [ルーティング](https://v3.ja.vuejs.org/guide/routing.html)

キーポイント：vue-routerを使うことで画面遷移処理を書くことができる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-vue-router?file=src/App.vue&terminal=dev


### [セキュリティ](https://v3.ja.vuejs.org/guide/security.html)

キーポイント：テンプレートは適切にエスケープ処理されたりしている。セキュリティ上注意すべき点がかかれている


### データフェッチ

[Fetch API](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API)などを使用してリアクティブな値に格納する。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-fetch?file=src/App.vue&terminal=dev


### パフォーマンスチューニング

[lodash/debounce](https://lodash.com/docs/#debounce)などのライブラリを使用して入力イベントなど高頻度のイベント発火を間引くことで再描画の頻度をへらし、描画負荷を軽減することができる。

演習：https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/practice-debounce?file=src/App.vue&terminal=dev



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


### [2.x からの破壊的変更の一覧](https://v3.ja.vuejs.org/guide/migration/introduction.html#%E7%A0%B4%E5%A3%8A%E7%9A%84%E5%A4%89%E6%9B%B4)
