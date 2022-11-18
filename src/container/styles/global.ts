import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #FFFFFF;
        --font: #707070;
        --grey: #F7F5EE;
        --header: #FFFFFF;
        --grey-white: #E8E8E8;
        --grey-mediun: #BDBDBD;
        --grey-black: #585858;
    }

    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: var(--grey-mediun);
        border-radius: 6px;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 
 
    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;

        h1{
            color: var(--grey-black);
        }
    }

    body, input, textarea, button {
        font-family: 'Lora', sans-serif;
    }

`

