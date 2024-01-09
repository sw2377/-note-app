import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* variables */
  :root {
    --color-blue: #f48225;
    --color-main-black: #404040;
    --color-sub-black: #6A6A6A;
    --color-gray: #A0A0A0;

    --color-bg: #F8F8F8;
    --color-line: #ECECEC;
  }

  /* reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: var(--color-black);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI Adjusted","Segoe UI","Liberation Sans", sans-serif;
    font-size: 1.6rem;

    width: 100%;
    min-width: 1400px;
    max-width: 1920px;
    margin: 0 auto;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: 400;
  }

  ul li, ol li {
    list-style: none;
  }

  img {
    width: 100%;
    border: 0;
  }

  a {
    display:inline-block;
    text-decoration: none;
    color: inherit;
  }

  /* layout */
  header {
    border: 1px solid red;
  }

  .container {
    border: 1px solid blue;
    
    display: flex;

    & nav {
      background-color: lightblue;
      width: 20%;
    }

    .contents {
      display: flex;
      width: 80%;
    }
  }


`;

export default GlobalStyles;
