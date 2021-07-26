---
title: "VSNotesでブログを書く"
date: 2021-07-13 22:07:23
description: "VSNotesを利用して快適な執筆環境を整える方法" 
tags: ['#dev']
category: "dev"
---
## 当サイトの執筆環境
当サイトの記事はMarkdownで書いてgithubへpushしている。CMSは特に使用していない。  
そのため、記事は全てローカル環境で執筆している。  
IDEはVSCodeを利用しており、どうせなら同じ環境で執筆できないかと考えて調べた結果、VSNotesという拡張機能にいきついた。  

ヘッドレスCSMを使用せず、ローカルでMarkdwonを書いている場合、かなり良い体験だったため書き残しておく。

## 何が良いのか
具体的には以下のような点が挙げられる。
1. 開発と執筆を同じエディタで行える
2. VSCode自体の動作が快適なためストレスフリー
3. VSNotesのテンプレート機能とGatsbyの相性が良い

中でも 「3. VSNotesのテンプレート機能とGatsbyの相性が良い」が特に気に入っており、これについて解説する。

### そもそもVSNotesって？
[VSNotes](https://marketplace.visualstudio.com/items?itemName=patricklee.vsnotes)はVSCodeの拡張機能の一つで、VSCode上で文章を作成するのを手助けしてくれる。
Markdownに対応しており、プレビュー機能を備えています。また、作成したファイルにタグを付けて分類することも可能。

### テンプレート機能って何？
VSNotesにはテンプレート機能というものがあり、読んで字の如く文書を作成する際に雛形を指定することができるもの。これがGatsbyでブログを書く上で非常に役立つ。  

当サイトでは、URLを見て分かる通り記事の作成日と名称を組み合わせて各記事のURLが構成されている。  
例えば、この記事であれば `https://yoshiba.dev/2021/07/13--write-with-vsnotes/` といった感じだ。  

この場合、記事を作成する際に毎回ディレクトリを作るのは非常に面倒くさい。まぁ言ってもディレクトリとしては月と日+タイトルだけなのだが、省ける手間は省きたいところ。  

ちなみに記事のファイル名は共通して `index.md` としている。  

VSNotesのテンプレート機能を使うことで、タイトルを入力するだけで自動的にディレクトリとindex.mdを作成し `yaml` まで書かれた状態を作れる。素敵。

### 実際の流れ
実際に記事を作成する手順としては、下記の通り。

1. Shift + Ctr(Command) + P でコマンドパレットを開き、「vsnotes」と入力すると「VSNotes: Create a New Note」が自動的に補完されるため Enter を押す
2. テンプレートを選択する
3. 記事のタイトルを入力する

この手順で自動的に今日の日付でディレクトリが作成され、yamlが記載された `index.md` が作成される。

## VSNotesの設定
### VSNotesのインストール
インストールについては、VSCodeの拡張機能のため単純にインストールすれば問題ない。

### ファイルの保存先の設定
ファイルの保存先は下記手順で設定する。

1. Shift + Ctr(Command) + P でコマンドパレットを開き、「vsnote run」と入力する
2. 「VSNotes: Run Setup」が補完されるため、 Enter を押す
3. 画面右下にダイアログが表示されるため、Open をクリックし、保存先のディレクトリを指定する

手順3について、当サイトではブログ記事のディレクトリを `ルートディレクトリ/content/blog/` としているため、同じディレクトリを指定する。

### ファイル名の設定
ファイル名(日付による階層化を含む)の設定は下記の通り。

1. Shift + Ctr(Command) + P でコマンドパレットを開き、「setting」と入力する
2. 「Preferences: Open Settings(JSON)」と補完されるため、Enter を押す
3. 次の内容を追記し、保存する

```json:title=setting.json
"vsnotes.noteTitleConvertSpaces": " ",
"vsnotes.defaultNoteTitle": "{YY}/{MM}/{DD}--{title}/index.md",
"vsnotes.tokens": [
  {
    "type": "datetime",
    "token": "{DD}",
    "format": "DD",
    "description": "Insert formatted datetime."
  },
  {
    "type": "datetime",
    "token": "{MM}",
    "format": "MM",
    "description": "Insert formatted datetime."
  },
  {
    "type": "datetime",
    "token": "{YY}",
    "format": "YYYY",
    "description": "Insert formatted datetime."
  },
  {
    "type": "title",
    "token": "{title}",
    "description": "Insert note title from input box.",
    "format": "Untitled"
  }
],
// 以下はテンプレートのため任意の名称を設定
"vsnotes.templates": [
  "blog",
  "book"
],
```

### テンプレートの設定
ファイルを作成した際のテンプレートを設定する。テンプレート名称は、上記の `vsnotes.templates` と合わせる必要がある。

1. [Code]> [基本設定] > [ユーザースニペット] をクリックする
2. 検索窓に[Markdown]と入力すると、markdown.json [Markdown] と補完されるのため、Enter を押す
3. 次の内容を記載し、保存する

``` json:title=markdown.json
"vsnote_template_blog": {
  "prefix": "vsnote_template_blog",
  "body": [
    "---",
    "title: ",
    "date: ",
    "description: ",
    "tags: ['#']",
    "category: ",
    "---",
    "$1",
  ],
  "description": "Blog Template",
},
"vsnote_template_book": {
  "prefix": "vsnote_template_book",
  "body": [
    "---",
    "title: ",
    "date: ",
    "description: ",
    "tags: ['#読んだ']",
    "category: `book`",
    "---",
    "$1",
  ],
  "description": "Book Review Template",
}
```

上記設定では、  
- `blog` ブログ記事用の汎用的なテンプレート  
- `book` 読書録用のテンプレート  
の2種類を設定している。  

`prefix` 内の `vsnote_template_` に続く文字列が、テンプレートと名称となり、`setting.json` の `vsnotes.templates` と合わせる必要がある部分。  

`body` の最下段にある、 `$1` はファイルを作成した際の初期カーソル位置を示している。

### 完成
以上で設定は完了。あとは、コマンドパレットから[VSNotes: Create a New Note]を実行した際に、テンプレートを指定できるようになり、ファイル名を入力すると今日の日付に合わせて自動的にディレクトリとファイルが作成されるようになる。

## デメリット
ファイルの保存場所は固定となるため、ブログ記事以外でメモを書こうとした場合でもブログのディレクトリにファイルが作成されてしまう。  
VSNotesをブログ記事執筆専用にする必要があるが、それが問題なければ体験としては悪くないと思う。