import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"

const ArticleStyles = styled.article`
  a {
    color: var(--primary);
    margin-bottom: 1rem;
    font-size: 2.5rem;
    font-weight: bold;
  }

  small {
    font-size: 1.3rem;
  }

  section {
    p {
      font-size: 1.7rem;
    }
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
              <Link to={node.fields.slug}>
                {title}
              </Link>
              <br />
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
            <hr />
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
