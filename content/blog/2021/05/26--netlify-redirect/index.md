---
title: "Netlifyでリダイレクトを使う"
date: 2021-05-26 22:03:03
description: "gatsby-plugin-netlifyを使用することで、簡単にリダイレクト設定を行うことが可能。"
tags: ['#GatsbyJS', '#Netlify']
category: "dev"
---

## やりたいこと
ブログ用に独自ドメインを取り直したため、Netlifyでカスタムドメインの設定を行った。
その際、今までのURLへアクセスがあった場合に新しいURLへリダイレクトをかける処理を実装した。

## 実装方法
Nelifyでリダイレクトを実装する方法として主に2パターンある。

- [パターン1] _redirectsファイルにリダイレクト設定を記述する
- [パターン2] netlify.tomlファイルにリダイレクト設定を記述する

今回はパターン1の方で実装した。

`_refirect`ファイルは公開ディレクトリ(public)に配置する必要があるが、`public`はbuild時に作成されるディレクトリであるため、`gitignore`でgithubにはpushしないように指定してある。
なので、`gatsby-plugin-netlify`というプラグインを使い、Netlifyでのbuild時に`_redirect`ファイルが作成される形で実装する。

### プラグインのインストール
まずは単純にプラグインのインストールを行う。

``` bash
npm i gatsby-plugin-netlify
```

プラグインをインストールしたら、`gatsby-config.js`へ追記する。

``` js
plugins: [`gatsby-plugin-netlify`]
```

### リダイレクト設定の記述
あとはリダイレクトの設定を`gatsby-node.js`に記述する。

``` js
exports.createPages = async ({ graphql, actions}) => {
const { createRedirect } = actions
  createRedirect({ fromPath: 'http://buildnote.yosh1ba.com/*', toPath: 'https://yoshiba.dev/:splat', isPermanent: true, force: true })
  createRedirect({ fromPath: 'https://buildnote.yosh1ba.com/*', toPath: 'https://yoshiba.dev/:splat', isPermanent: true, force: true })
}
```

`fromPath`  リダイレクト元URL  
`toPath`    リダイレクト先URL  
`isPermanent:`  恒久的な移転。SEOに関わってくるらしいが詳しく調べれていない。  
`force` fromPathの部分一致でリダイレクトをかけるかどうか

上記の細かいパラメータについては、[createRedirect](https://www.gatsbyjs.org/docs/actions/?__hstc=247646936.a585b6bea35ce7871eaf6cd3d7e8df5c.1613664566712.1622033944113.1622037725447.56&__hssc=247646936.134136.1622037725447&__hsfp=3471426216#createRedirect) に書かれている。

設定が終わったら、いつも通りgithubへpushすればNetlifyが勝手にリダイレクト設定を行ってくれる。