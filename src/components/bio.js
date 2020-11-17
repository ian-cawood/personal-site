/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const Bio = () => {
  return (
    <>
      <p>
        My name is <strong>Ian Cawood</strong> and I live and
        <a href="https://nona.digital/">
          {` work `}
        </a>
        in Cape Town, South Africa. I work as a software engineer and write blogs about topics that tickle my fancy. You can follow me on
        <a href="https://github.com/ian-cawood">
          <strong>{` GitHub `}</strong>
        </a>
        or
        <a href="https://twitter.com/Ian_Cawood">
          <strong>{` twitter.`}</strong>
        </a>
      </p>
    </>
  )
}

export default Bio
