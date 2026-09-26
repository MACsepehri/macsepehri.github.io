import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Vazirmatn;
        src: url('files/vazir.woff2') format('woff2');
    }
    :root {
        --box-color: #0c2f50;
        --border-color: #283e54;
    }
    * {
        font-family: Vazirmatn;
        color: white;
    }
    body {
        background-color: #112436;
    }
`

export const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
`
export const SectionContent = styled.div`
    width: 100%;
    max-width: fit-content;
    display: flex;
    justify-content: center;
`
export const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export const Favicon = styled.img`
    width: 140px;
    height: 140px;
    border-radius: 100%;
    margin-top: 10px;
`
export const HeaderDiv = styled.div`
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
    border-radius: 50px;
    border: 4px solid var(--border-color);
    background: var(--box-color);
    margin: auto;
`
export const ContactLink = styled.a`
    width: 120px;
    padding: 10px;
    padding-right: 30px;
    padding-left: 30px;
    border: 2px solid #a8e3ff;
    text-decoration: none;
    border-radius: 10px;
    gap: 10px;
    &:hover {
        text-decoration: none;
    }
`
export const EmailIcon = styled.img`
    max-width: 36px;
    transition: filter 0.3s;
    filter: brightness(0) invert(77%) sepia(40%) saturate(500%) hue-rotate(180deg);
    transform: translateY(10px);
`
export const ProjectBox = styled.div`
    width: 400px;
    height: 500px;
    border-radius: 30px;
    border: 4px solid var(--border-color);
    background: var(--box-color);
`
export const ProjectImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 100%;
`
export const ProjectBoxContent = styled.div`
    margin-top: 20px;
`