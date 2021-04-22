import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
            <Sns social={social} />
          </p>
        </div>
      )}
      
    </div>
  )
}

export default Bio
