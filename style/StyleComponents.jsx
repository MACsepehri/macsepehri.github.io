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
        transition: color 200ms ease, background-color 200ms ease;
    }
    a {
        font-size: 18px;
        text-decoration: none;
    }
    a:hover { text-decoration: underline; }
`;

export const Box = styled.header`
    width: 100%;
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 16px 8px;
`;

export const BoxContent = styled.div`
    width: 100%;
    max-width: 900px;
    padding: 8px;
`;

export const RouteBox = styled.div`
    padding: 16px;
    border-radius: 10px;
    border: 2px solid #e0e0e0;
    background: #eee;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    gap: 16px;

    @media (max-width: 500px) {
        padding: 10px;
        gap: 12px;
        border-radius: 8px;
    }
`;

export const HeaderImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 15px;
    object-fit: cover;
    align-self: center;
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

export const KnowledgeDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
`;

export const KnowledgeImage = styled.img`
    flex: 1 1 60px;
    max-width: 100px;
    height: auto;
    display: block;
    object-fit: contain;
`;

export const LineHeight = styled.div`
    line-height: 0.5;

    @media (max-width: 582px) {
        line-height: 1.8;
    }
`;