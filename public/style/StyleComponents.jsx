import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'IranSans';
        src: url('font/font.woff') format('woff');
        font-display: swap;
    }
    *, *::before, *::after { box-sizing: border-box; }
    body {
        margin: 0;
        padding: 0;
        background: linear-gradient(to right, white , #e0e0e0);
        font-family: 'IranSans', system-ui, sans-serif;
        transition: color 200ms ease, background-color 200ms ease; */
    }
    a {
        font-size: 18px;
        text-decoration: none;
    }
    a:hover { text-decoration: underline; }
`;

export const Header = styled.header`
    width: 100%;
    min-height: 100vh;
    display: grid;
    place-items: center;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 900px;
    padding: 16px;
`;

export const HeaderBox = styled.div`
    padding: 24px;
    border-radius: 10px;
    border: 2px solid #e0e0e0;
    background: #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;

    @media (max-width: 600px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const HeaderImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 15px;
    object-fit: cover;
`;

const blink = keyframes`
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
`;

export const Cursor = styled.span`
    display: inline-block;
    width: 2px;
    height: 1em;
    background: currentColor;
    vertical-align: -0.1em;
    margin-inline-start: 4px;
    animation: ${blink} 1s step-end infinite;
`;