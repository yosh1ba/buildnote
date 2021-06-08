import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useLocation } from "@reach/router"

import Sns from "../components/sns"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const location = useLocation()
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let about

  if (isRootPath){
    about = (
      <span>当サイトについては<Link to="/about">こちら</Link>。</span>

    )
  }

  return (
    <div className="bio">
      <div>
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/profile-pic.png"
          width={100}
          height={100}
          quality={95}
          placeholder="none"
          alt="プロフィールアイコン"
        />
        <p className="bio-name">{author.name}</p>
      </div>
      {author?.name && (
        <div>
          <p>
            医療機関向けシステムのエンジニアをしています。
            フロントエンドが好きで、最近はJamstackに夢中です。
            {about}
            <Sns social={social} />
          </p>
        </div>
      )}
      
    </div>
  )
}

export default Bio
