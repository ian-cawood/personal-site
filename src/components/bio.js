/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/ian.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={`Ian Cawood`}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        My name is <strong>Ian Cawood</strong> and I live and
        <a href="https://nona.digital/">
          {` work `}
        </a>
        in Cape Town, South Africa. I work as a software engineer and write blogs about any topic that I feel passionate about. You can follow me on
        <a href="https://github.com/ian-cawood">
          {` GitHub `}
        </a>
        or
        <a href="https://twitter.com/Ian_Cawood">
          {` twitter.`}
        </a>
      </p>
    </div>
  )
}

export default Bio
