import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'IranYekan';
        src: url('./font/IRANYekanX-Light.woff');
    }
    * {
        font-family: 'IranYekan';
        color: #edf1fb;
        direction: rtl;
    }
    :root {
        --border-color: #0c2842;
        --light-border-color: #1b3a56;
    }
    body {
        background: linear-gradient(to right, #001931, #123250);;
        overflow-x: hidden;
    }
`

export const MyselfImage = styled.img`
    max-width: 200px;
    max-height: 200px;
    border-radius: 100%;
    border: 4px solid var(--light-border-color);
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

export const Box = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    margin: auto;
    position: absolute;
`

export const BoxContent = styled.div`
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
`

export const SkillsWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 40px;
    margin-top: 50px;
`

export const SkillsColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 160px;
`

export const SkillRow = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 10px;
    height: 24px;
    direction: ltr;
`

export const GreenCircle = styled.div`
    width: 12px;
    height: 12px;
    background: linear-gradient(to right, #92ff8c, #033a00);
    border-radius: 100%;
    flex-shrink: 0;
`

export const LevelText = styled.span`
    text-align: left;
    display: inline-block;
`