import styled from "styled-components";

export const Container = styled.main`
    h1{
        color: var(--font);
        font-weight: 400;
        font-size: 6rem;
        text-align: center;
        align-items: center;
        //max-width: 1128px;
        margin: auto;

        padding: 5rem 5rem;
    }

    padding: 0rem 0rem 0rem 0rem;
`;

export const Galeria = styled.main`
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    .container-galeria{
        //height: 100px;
        //width: 200px;
        display: grid;
        //grid-template-columns: repeat(6, 1fr,minmax(1080px,1fr));;
        //grid-template-columns: repeat(6, 1fr);
        //grid-template-columns: minmax(720px , 1fr);
        grid-auto-rows: 8rem;
        grid-auto-flow: column;
        grid-auto-columns: minmax(240px,1fr);
        grid-template-rows: 300px;
        grid-gap: 0.5rem;
        overflow-x: auto;
        //height: 593px;
        
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .container-galeria::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .container-galeria {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    .container-galeria::-wenkit-scrollbar{
        display: none;
    }

    .img-galeria{
        position: relative;
        //width: 400px;
        //height: 100%;
    }

    .item-galeria .img-galeria{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .h-1{
        grid-row: span 1;
    }
    .h-2{
        grid-row: span 2;
    }
    .h-3{
        grid-row: span 3;
    }
    .w-1{
        grid-column: span 1;
    }
    .w-2{
        grid-column: span 2;
    }

    @media(max-width: 720px){
        .container-galeria{
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 15rem;
        }
    }
`;