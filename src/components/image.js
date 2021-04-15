import React from "react"
import { useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"


export default props => {
  const {allImageSharp} = useStaticQuery(graphql `
    query{
      allImageSharp {
        nodes {
          fluid {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
      <Img
        fluid={
          allImageSharp.nodes.find(n => n.fluid.originalName === props.filename)
            .fluid
        }
        alt={props.alt}
        style={props.style}
      />
  )
}