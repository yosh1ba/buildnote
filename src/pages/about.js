import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "./about.module.scss"

const About = ({data, location}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <Bio />
      <article className={styles.language}>
        <h2>当サイトについて</h2>
        <p>業務でやったこと、プログラミング学習中の気づき、思ったことなど色々書いていきます。
          何かの拍子に誰かのお役に立てれば嬉しいです。
        </p>
        <h3>使用技術</h3>
        <ul>
          <li>Gatsby 3.1.2</li>
          <li>Netlify</li>
        </ul>
        <h3>クレジット</h3>
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik" target="blank">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></div>
      </article>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
