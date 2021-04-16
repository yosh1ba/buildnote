import React from "react"
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"


export default props => {
  const {allImageSharp} = useStaticQuery(graphql `
    query{
      allImageSharp {
        nodes {
          fixed(width:60) {
            originalName
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
      <Img
        fixed={
          allImageSharp.nodes.find(n => n.fixed.originalName === props.filename)
            .fixed
        }
        alt={props.alt}
      />
  )
}