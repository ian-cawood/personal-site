import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #3772FF;
    --secondary: #0CCA4A;
    --tertiary: #963484;
    --black: #090C08;
    --white: #FFFFFF;
  }
  html {
    background-size: 450px;
    background-attachment: fixed;
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--primary) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--primary) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  img {
    max-width: 100%;
  }

  a {
    color: var(--black);
    text-decoration: none;
    box-shadow: none;
    &:hover {
      color: var(--primary);
    }
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }
`

export default GlobalStyles
