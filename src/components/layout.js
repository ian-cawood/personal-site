import React from "react"
import styled from "styled-components"

import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"
import Nav from "./Nav"

const SiteBorderStyles = styled.div`
  max-width: 100rem;
  margin: 12rem auto;
  margin-top: clamp(0.5rem, 10vw, 2rem);
  padding: 0;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  border: 5px solid var(--white);
`

const ContentStyles = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  background: white;
  padding: 2rem;
`

const Layout = ({ location, title, children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <Nav />
        <ContentStyles>
          {children}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </ContentStyles>
      </SiteBorderStyles>
    </>
  )
}

export default Layout
