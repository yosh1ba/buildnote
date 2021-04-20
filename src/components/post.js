import * as React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"
import * as styles from "./post.module.scss"
import TagsList from "./tagsList"

const Post = ({slug, title, date, tags, category}) => {

  const data = useStaticQuery(graphql`
    query{
      allFile(filter: {relativeDirectory: {eq: "eyecatch"}}) {
        nodes {
          name
          publicURL
        }
      }
    }  
  `)

  const eyecatch = data.allFile.nodes.find( file => file.name === category)?.publicURL


  return (
    <Link to={slug} itemProp="url">
      <div key={slug} className={styles.wrapper}>
        <div className={styles.eyecatch}>
          <div className={styles.eyecatchIcon}>
            <img 
            src={eyecatch} 
            width="100%" height="100%" alt="アイキャッチアイコン" />
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