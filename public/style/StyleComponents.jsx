import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'IranYekan';
        src: url('font/font.woff');
    }
    * { font-family: 'IranYekan'; color: white; transition: all 300ms ease-in-out; }
    body {
        background-color: #002240;
    }
    a {
        font-size: 18px;
        text-decoration: none;
    }
    a:hover { text-decoration: underline; }
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
    border-bottom: 2px solid #fff;
    text-align: center;
`
export const LoginSection = styled.div`
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50%,-50%);
`
export const InputBox = styled.input`
    padding: 10px;
    width: 140px;
    border: none;
    outline: none;
    background: none;
    border-bottom: 2px solid #041625;
    font-size: 15px;
`
export const SubmitLoginButton = styled.button`
    width: 160px;
    padding: 15px;
    background: #041625;
    border: 3px solid #041625;
    font-size: 17px;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
        background: none;
        color: #041625;
        font-weight: 600;
    }
`
export const HeaderBox = styled.header`
    width: calc(100% - 116px);
    background: #205e90;
    position: absolute;
    right: 20;
    top: 20;
    display: flex;
    flex-wrap: wrap;
`
export const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
`