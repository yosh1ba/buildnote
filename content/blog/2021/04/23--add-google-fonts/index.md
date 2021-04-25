---
title: GatsbyJSでGoogle Fontsを使えるようにする
date: 2021-04-23 18:04:11
description: 
tags: ['#GatsbyJS', '#Google Fonts']
category: "dev"
---

## やりたいこと
GatsbyJSで作ったサイトでGoogle Fontを使いたい

## 方法
今回はセルフホスティング[^1]で実装する。  
Google Fontsのセルフホスティングは「@fontsource」というパッケージで実現できる。

### @fontsourceの導入
npmもしくはyarnで普通にインストールを行う。
```
npm install @fontsource/noto-sans-jp
```
インストールが終わったら、js側でimportする。

```
import "@fontsource/noto-sans-jp"
```

あとはCSSのfont-familyで"Noto Sans JP"を指定してやれば表示される。

### セルフホスティングにした理由
実装方法としてtypographyを使用する方法もあるが、読み込みに多少の時間を要する。Jamstackは高速なため、かえってその読み込み時間が目立ってしまう。

そのため今回はあえてセルフホスティングにて実装した。

[^1]: 同一ホスト内にデータを持たせておくこと