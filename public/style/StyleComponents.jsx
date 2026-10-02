import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'IranSans';
        src: url('font/font.woff');
    }
    * { font-family: 'IranSans'; color: white; transition: all 300ms ease-in-out; }
    body {
        background-color: #002240;
    }
    a {
        font-size: 18px;
        text-decoration: none;
    }
    a:hover { text-decoration: underline; }
`