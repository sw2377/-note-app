import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* variables */
  :root {
    --color-blue: #0078C5;
    --color-lightblue: #E4F2FE;
    --color-main-black: #404040;
    --color-sub-black: #6A6A6A;
    --color-gray: #A0A0A0;
    --color-white: #fff;

    --color-bg: #F4F4F4;
    --color-line: #ECECEC;

    --border-radius: 4px;
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

  label {
    display: inline-block;
  }

  input {
    display: inline-block;
    width: 100%;
    padding: 8px 0;
    text-indent: 10px;
    border: none;
    border-radius: var(--border-radius);

    &:focus-visible {
      outline: none;
    }
  }

  span {
    display: inline-block;
  }

  /* layout */
  .sidebar {
    min-width: 200px;
    max-width: 250px;
    flex-grow: 2;
  }

  .container {
    display: flex;
    width: 100%;
    height: calc(100vh - 49px);
  }

  .note-container {
    display: flex;
    width: 100%;
  }

  .note-list {
    min-width: 250px;
    max-width: 280px;
    flex-grow: 2;
  }

  .note-item {
    flex-grow: 8;
  }
`;

export default GlobalStyles;
