import styled from "styled-components";

export const Container = styled.main`
    p{
        font-size: 20px;
    }

    .foto-prinpal{
        padding: -90px;
        height: 20px;
        display: flex;
    }
    text-align: center;
    padding: 0rem 0rem 0rem 0rem;
`;

export const Galeria = styled.main`
    margin: 0;
    padding: 0;
    padding-bottom: 4rem;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
   
    
    

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
    .h-4{
        grid-row: span 4;
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