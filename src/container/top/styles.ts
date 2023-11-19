import styled from "styled-components";

export const Container = styled.main`
    p{
        font-size: 20px;
    }

    text-align: center;

    @media(max-width: 480px){
        p{
            font-size: 1.2rem;
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }
    //padding: 0rem 0rem 0rem 0rem;

`;

export const Galeria = styled.main`
    /*margin: 0;
    padding: 0;
    padding-bottom: 4rem;
    box-sizing: border-box;*/
    width: 100px;
    height: 100px;

`;