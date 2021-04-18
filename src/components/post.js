import * as React from "react"
import {Link} from "gatsby"
import * as styles from "./post.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import TagsList from "./tagsList"


const Post = ({slug, title, date, tags, category}) => {

  const categoryImage = `../images/${category}.png`

  return (
    <Link to={slug} itemProp="url">
      <div key={slug} className={styles.wrapper}>
        <div className={styles.eyecatch}>
          <div className={styles.eyecatchIcon}>
            <StaticImage
              src={categoryImage}
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