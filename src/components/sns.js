import * as React from "react"

import * as styles from "./sns.module.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const SNS = ({social}) => {
  return (
    <div className={styles.icons}>
      <a href={`https://twitter.com/${social.twitter}`} itemProp="url" target="blank">
        <FontAwesomeIcon icon={faTwitter} className={styles.twitter} />
      </a>
      <a href={`https://github.com/${social.github}`} itemProp="url" target="blank">
        <FontAwesomeIcon icon={faGithub} className={styles.github} />
      </a>
    </div>
  )
}

export default SNS