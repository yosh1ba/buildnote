---
title: "GatsbyJSでビルド時に TypeError: resolvePages is not a function が発生"
date: 2021-06-25 18:04:57
description: "gatsby-plugin-sitemapのバージョンを@^3.3.0にすることで解消。"
tags: ['#GatsbyJS']
category: "dev"
---
## 発生したエラー
`gatsby build` 時に下記エラーが発生。

```jsx
error "`" threw an error while running the onPostBuild lifecycle:
resolvePages is not a function
  46 |   queryRecords = _yield$graphql.data;
  47 |   _context.next = 8;
  48 |   return Promise.resolve(resolvePages(queryRecords)).catch(function (err) {
     |                          ^
  49 |     return reporter.panic(_internals.REPORTER_PREFIX + " Error resolving Pages", err);
  50 |   });
  51 |


  TypeError: resolvePages is not a function
```

## 原因
`gatsby-plugin-sitemap` のバージョンが上がったため、 `gatsby-config.js` に書いている処理が正しく処理できていないものと思われる。

```jsx
{
  resolve: `gatsby-plugin-sitemap`,
  options: {
    output: `/sitemap.xml`,
    createLinkInHead: true,
    exclude: [`/category/`,`/category/*`, `/tags/`, `/tags/*`],
    query: `
      {
        site {
          siteMetadata {
            siteUrl
          }
        }
        allSitePage {
          nodes {
            path
          }
        }
    }`,
    serialize: ({ site, allSitePage }) =>
      allSitePage.nodes.map(node => {
        return {
          url: `${site.siteMetadata.siteUrl}${node.path}`,
          changefreq: `weekly`,
          priority: 0.5,
        }
      })
  }
}
```

上記の `exclude` がどこかのバージョンからか `excludes` に変更になっている模様。単純に `exculudes` に修正した際に、上記エラーが発生した。

## 解決策
ひとまず `gatsby-plugin-sitemap` のバージョンを `@^3.3.0` にすることで解消。