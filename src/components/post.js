import * as React from "react"
import {Link} from "gatsby"
import * as styles from "./post.module.scss"
import TagsList from "./tagsList"
import Image from "./image"
import { StaticImage } from "gatsby-plugin-image"

const Post = ({slug, title, date, tags}) => {
  return (
    <div key={slug} className={styles.wrapper}>
      <Link to={slug} className={styles.link} itemProp="url">
        <div className={styles.thumbnail}>
            {/* <Image filename="dev.png" 
              style={{width: "60px"}} /> */}
              <StaticImage
                className="icon-image"
                src="../images/dev.png"
                placeholder="blurred"
              />
        </div>
        <div style={{width: `100%`}}>
          <h3 itemProp="headline" className={styles.titleStyle}>{title}</h3>
          <p className={styles.date}>{date}</p>
          <TagsList tags={tags} />
        </div>
      </Link>
    </div>
  )
}

export default Post