import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* variables */
  :root {
    --color-blue: #f48225;
    --color-main-black: #404040;
    --color-sub-black: #6A6A6A;
    --color-gray: #A0A0A0;
    --color-white: #fff;

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
    width:100%;
    height:100%;
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1.6rem;
  }

  /* layout */
  header {
    height: 40px;
    text-align: center;
  }

  .container {
    display: flex;
    height: calc(100vh - 40px);

    & nav {
      border: 1px solid #ccc;
      padding: 20px;
      max-width: 200px;
      flex-grow: 2;
    }

    .note_container {
      border: 1px solid gray;
      display: flex;
      flex-grow: 9;
      /* width: 80%; */

      & .no-contents {
        width: 100%;
        height: 100%;
        background-color: ivory;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      & .note-list {
        border: 1px solid #ccc;
        /* display: flex; */
        /* padding: 20px; */
        max-width: 250px;
        flex-grow: 2;
        overflow-y: auto;

        & ul > li { border-bottom: 1px solid gray }
      }

      & .note-item {
        border: 1px solid #ccc;
        padding: 20px;
        flex-grow: 8;
      }
    }
  }
`;

export default GlobalStyles;
