import * as React from "react"
import {Link} from "gatsby"
import * as styles from "./post.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import TagsList from "./tagsList"

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
        <article>
          <h3 itemProp="headline" className={styles.titleStyle}>{title}</h3>
          <p className={styles.date}>{date}</p>
          <div>
          <a href="/" style={{display: "block"}}>aaa</a>
          </div>
          
          {/* <TagsList tags={tags} /> */}
        </article>
      </Link>
    </div>
  )
}

export default Post