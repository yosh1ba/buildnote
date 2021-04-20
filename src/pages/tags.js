import * as React from "react"
import { graphql, Link } from "gatsby"
import kebabCase from 'lodash/kebabCase';

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Tags = ({
  location,
  data: {
    site: {
      siteMetadata: {title},
    },
    allMarkdownRemark: {group}
  },
}) => (
    <Layout location={location} title={title}>
      <Seo title="タグ一覧ページ"  />
      <Bio />
      <h4>タグ一覧</h4>
      <div>
        <ul>
          {group.map(tag => (
            <li key={tag.ffieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )

export default Tags

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
