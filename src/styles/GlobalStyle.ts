import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('assets/Roboto.woff2') format('woff2');
}
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Roboto";
  }

  body {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }
`
export const colors = {
    rosa: "#dbaeae",
    rosa1: "#CD9B9B",
    bgGreen: "rgba(80, 183, 186, 0.42)",
    marrom: "#8B6969",
    white: "#ffffff",
    black: "#000000",
    gray: "#cccccc"
    }