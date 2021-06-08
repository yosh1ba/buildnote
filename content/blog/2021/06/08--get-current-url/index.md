---
title: "GatsbyJSで現在のページのURLを取得する"
date: 2021-06-08 23:24:12
description: "GatsbyJSに含まれている「@reach/router」を利用することで取得可能。"
tags: ['#GatsbyJS']
category: "dev"
---

## やりたいこと
ブログにAboutページを追加した際、bioエリアに「こちら」的なアンカーを設定した。  
ただ、Aboutページを開いている場合にはアンカーは表示させたくない。  
そのため、現在のURLを取得しトップページの場合のみアンカーを表示させるようにしたい。


## 実装方法
Gatsbyに含まれている @reach/router を利用することで、URLが取得できた。

``` js
import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useLocation } from "@reach/router" // ★追加

import Sns from "../components/sns"

const Bio = () => {
  const data = useStaticQuery(graphql`
    ...
  `)

  const location = useLocation()
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let about

  // ★ トップページの場合は変数aboutにアンカー用のHTMLを設定
  if (isRootPath){
    about = (
      <span>当サイトについては<Link to="/about">こちら</Link>。</span>

    )
  }

  return (
    /* 適当な場所に{about}を表示させる */
  )
}

export default Bio

```

## うまくいかなかったパターン
最初、`bio.js`の親要素となる`index.js`からlocationをpropsで受け取り表示させようとしたが、`location.pathname`が`undefind`となり利用できなかった。  
  
同じように`index.js`からlocationをpropsで受け取っている`Layout.js`では問題なくlocationを利用できている。  
なぜ`bio.js`で出来ないのかが不明。色々と調べてみたが、分からなかった。
