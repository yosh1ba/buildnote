import * as React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"
import * as styles from "./post.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import TagsList from "./tagsList"

const Post = ({slug, title, date, tags, category}) => {

  const data = useStaticQuery(graphql`
    query{
      allFile(filter: {relativeDirectory: {eq: "eyecatch"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData (
              placeholder: NONE
              formats: [AUTO, WEBP, AVIF]
              quality: 95
            )
          }
          name
        }
      }
    }  
  `)

  console.log(data)

  const image = getImage(data.allFile.nodes.find( (n) => n.name === category).childImageSharp)
  return (
    <Link to={slug} itemProp="url">
      <div key={slug} className={styles.wrapper}>
        <div className={styles.eyecatch}>
          <div className={styles.eyecatchIcon}>
            <GatsbyImage
              image={image}
              alt="アイキャッチアイコン"
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