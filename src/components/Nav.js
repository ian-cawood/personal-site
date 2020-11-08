import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavStyles = styled.nav`
  margin-top: 1rem;
  border-bottom: 5px solid var(--tertiary);
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 2rem;
    align-items: center;
  }

  a {
    font-size: 3rem;
    font-weight: 3;
  }
`

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </NavStyles>
  )
}
