---
title: "[DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated 解消"
date: 2021-06-28 18:09:25
description: "got@latestのインストールで解消した。"
tags: ['#GatsbyJS']
category: "dev"
---
## 発生したエラー
ある時から`gatsby build`時に下記エラーが出るようになっていた。

```jsx
[DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated
```

内容的には`prototype._headers` は非推奨ということらしい。

nodeのバージョンを15系に戻すと解消するとの記事もあったため試してみたが、解消しなかった。

## 解決策
`got@latest` をインストールすると解消した。
