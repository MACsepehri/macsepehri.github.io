import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'IranYekan';
        src: url('font/font.woff');
    }
    * { font-family: 'IranYekan' }
    body {
        background-color: #002240;
    }
`
export const BaseSection = styled.div`
    display: flex;
    justify-content: center;
`
export const Section = styled.div`
    width: calc(100% - 100px);
    height: calc(100vh - 100px);
    background: #11385a;
    margin-top: 30px;
    border-radius: 10px;
    border-bottom: 2px solid #fff;
`