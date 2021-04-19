import * as React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"
import * as styles from "./post.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"
import TagsList from "./tagsList"

// TODO: GatsbyImageはgraphqlを使う必要あり？
const Post = ({slug, title, date, tags, category}) => {

  const data = useStaticQuery(graphql`
    query CategoryIcon {
      file(name: {eq: "dev"}, extension: {eq: "png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  console.log(data)

  return (
    <Link to={slug} itemProp="url">
      <div key={slug} className={styles.wrapper}>
        <div className={styles.eyecatch}>
          <div className={styles.eyecatchIcon}>
            <GatsbyImage
              src=""
              placeholder="blurred"
              alt="アイキャッチ"
              formats={["AUTO", "WEBP", "AVIF"]}
            />
          </div>
        </div>
        <div>
          <h3 itemProp="headline" className={styles.titleStyle}>{title}</h3>
          <p className={styles.date}>{date}</p>
          <TagsList tags={tags} />
        </div>
      </div>
    </Link>
  )
}

export default Post