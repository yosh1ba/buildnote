import * as React from "react"
import {Link} from "gatsby"
import * as styles from "./post.module.scss"

const Post = ({slug, title, date}) => {
  return (
    <div key={slug} className={styles.wrapper}>
    <Link to={slug} itemProp="url">
      <h3 itemProp="headline" className={styles.titleStyle}>{title}</h3>
      <p className={styles.date}>{date}</p>
    </Link>
  </div>
  )
}

export default Post