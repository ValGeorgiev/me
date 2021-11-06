import { createGlobalStyle } from 'styled-components'
import fonts from './fonts'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    overflow-x: hidden;
    font-family: ${fonts.fontFamilyRegular};
  }

  #__next {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }


  h1, h2, h3, h4, h5 {
    font-family: ${fonts.fontFamilyBold};
  }

  span {
    font-family: ${fonts.fontFamilyRegular};
  }

  p {
    font-family: ${fonts.fontFamilyRegular};
  }

  button {
    font-family: ${fonts.fontFamilyLight};
    cursor: pointer;
  }

  input {
    font-family: ${fonts.fontFamilyRegular};
  }

  label {
    font-family: ${fonts.fontFamilyRegular};
  }

  a {
    color: inherit;
    text-decoration: none;
    font-family: ${fonts.fontFamilyLight};
    cursor: pointer;
  }
`

export default GlobalStyle;