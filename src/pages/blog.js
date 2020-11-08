import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"

const ArticleStyles = styled.article`
    a {
        margin-bottom: 1rem;
        font-size: 2rem;
    }
`

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <ArticleStyles key={node.fields.slug}>
            <header>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
              <hr />
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </ArticleStyles>
        )
      })}
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
