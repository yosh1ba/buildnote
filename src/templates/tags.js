import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

const Tags = ({data, location}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <div>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <Post
              slug={post.fields.slug} 
              title={title}
              date={post.frontmatter.date}
              tags={post.frontmatter.tags}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: { frontmatter: { tags: { in: [$tag] } } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          tags
        }
      }
    }
  }
`
