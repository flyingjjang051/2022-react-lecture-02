import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "NanumSquareNeo";
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
  *,*:before ,*:after {
    box-sizing: border-box;
    margin: 0;
    padding:0;
  }
  body {
    font-family: "NanumSquareNeo";    
    background-color: #333;
  }
  input,textarea {
    font-family: inherit;
  }
  a {
    text-decoration: none;
    color:inherit;
  }
  li {
    list-style: none;
  }
  `;
export default GlobalStyle;
