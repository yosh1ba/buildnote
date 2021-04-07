import * as React from "react"
import {Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./post.module.scss"
import Tags from "./tags"

const Post = ({slug, title, date, tags}) => {
  return (
    <div key={slug} className={styles.wrapper}>
      <Link to={slug} className={styles.link} itemProp="url">
        <div className={styles.thumbnail}>
          <span>
            sample
          </span>
        </div>
        <div>
          <h3 itemProp="headline" className={styles.titleStyle}>{title}</h3>
          <p className={styles.date}>{date}</p>
          <Tags tags={tags} />
        </div>
      </Link>
    </div>
  )
}

export default Post