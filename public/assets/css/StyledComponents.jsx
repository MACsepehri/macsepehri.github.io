import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'IranYekan';
        src: url('./public/assets/font/IRANYekanX-Light.woff');
    }
    * {
        font-family: 'IranYekan';
        color: #b8c1d7;
        direction: rtl;
    }
    :root {
        --border-color: #0c2842;
        --light-border-color: #1b3a56;
    }
    body {
        background-color: #001931;
    }
`

export const MyselfImage = styled.img`
    max-width: 200px;
    max-height: 200px;
    border-radius: 100%;    
`

export const Header = styled.header`
    width: 60%;
    height: 70vh;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-bottom: 2px solid var(--light-border-color);
`

export const HeaderContent = styled.div`
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 60px;
`