import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Shadow me to add your own bio content
 */

const BioContent = () => (
  <Fragment>
    Words by <Styled.a href="http://example.com/">Ian Cawood</Styled.a>.
    <br />
    A software engineer living in Cape Town, South Africa.
  </Fragment>
)

export default BioContent
