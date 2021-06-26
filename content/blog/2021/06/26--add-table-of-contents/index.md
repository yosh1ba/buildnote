---
title: "GatsbyJSで目次を作成する"
date: 2021-06-26 22:32:27
description: "gatsby-transformer-remarkとgatsby-remark-autolink-headersを導入することで簡単に実現可能"
tags: ['#GatsbyJS']
category: "dev"
---
## やりたいこと
Markdown形式で書いたブログ記事の中に目次を追加し、各ヘッダーへのジャンプができるようにする。

## やったこと
以下の2つのプラグインを利用する。

- [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)
- [gatsby-remark-autolink-headers](https://www.gatsbyjs.org/packages/gatsby-remark-autolink-headers/)

Markdown形式で記事を作成している場合、`gatsby-transformer-remark` については既に導入済みのはず。このプラグインを利用して、まずは目次を表示する。

[gatsby-starter-blog](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog)を使っている場合、記事情報は `data` という名前の `props`として受け取る形になっている。

この `data` オブジェクトの中に、GraphQLで目次を利用するための `tableOfContents` が存在する。
これをGraphQLに追記し、`return` 部分に `dangerouslySetInnerHTML={{ __html: post.tableOfContents }}` を追記する。

```jsx

const BlogPostTemplate = ({ data, location }) => {

  return (
    // 目次を表示させたい箇所に以下を追記する
    <div dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html

      // 以下追記
      tableOfContents(
        absolute: false
        pathToSlugField: "frontmatter.path"
        maxDepth: 3
      )

    }
  }
`
```

ここまでの状態で、目次がリスト形式で出力されるようになる。

CSSを調整したい場合は、 `<div dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />` に対して `className` を指定するとよい。

ただ、このままでは各ヘッダーに対して `id` が設定されていないため、目次をクリックしてもスクロールが発生しない。これを解決するために、 `gatsby-remark-autolink-headers` をインストールする。

インストール後、 `gatsby-config.js` に設定を行う。

```jsx
module.exports = {
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
              maintainCase: false,
            },
          },
        ],
      },
    },
  ],
}
```

### オプションについて
今回指定したオプションは以下の2種類。

`icon : false` デフォルトではヘッダーにハイパーリンクのアイコン(🔗 ←これ)が挿入されてしまう。表示させたくなかったため `false` を指定。

`maintainCase : false` ヘッダーに挿入される`id`について、大文字小文字の保持するかの設定。一見、保持したほうが良さそうに思えるが、目次側の `href`属性に小文字が設定されているため大文字を保持してしまうとジャンプが効かなくなる。`false` を指定すると小文字で揃えることができたため、そうしている。

その他オプションについては、[Document](https://www.gatsbyjs.com/plugins/gatsby-remark-autolink-headers/) を参照。

### 注意点
`gatsby-remark-autolink-headers` を `gatsby-config.js` に記述する際、`gatsby-remark-prismjs` よりも前に記述する必要がある。  
[Document](https://www.gatsbyjs.com/plugins/gatsby-remark-autolink-headers/) にも以下の記述がある。

> Note: if you are using gatsby-remark-prismjs, make sure that it’s listed after this plugin. Otherwise, you might face an issue described here: [https://github.com/gatsbyjs/gatsby/issues/5764](https://github.com/gatsbyjs/gatsby/issues/5764).