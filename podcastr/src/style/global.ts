import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFF;

    --gray-50: #F7F8FA;
    --gray-100: #E6E8EB;
    --gray-200: #AFB2B1;
    --gray-500: #808080;
    --gray-800: #494D4B;

    --green-500: #04D361;

    --purple-300: #9F75FF;
    --purple-400: #9164FA;
    --purple-500: #8257E5;
    --purple-800: #6F48C9;
  }

  @media (max-width: 1080px) {
    html, body {
      font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 1080px) {
    html, body {
      font-size: 87.5%; // 14px
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: var(--gray-50);
    color: var(--gray-500);
  }

  html, body, input, textarea, button {
    font-size: 62.5%;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lexend', sans-serif;
    font-weight: 600;
    color: var(--gray-800);
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  button {
    cursor: pointer;
  }
`
