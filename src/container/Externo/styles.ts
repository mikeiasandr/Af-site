import styled from "styled-components";

export const Container = styled.main`
    h1{
        color: var(--font);
        font-weight: 400;
        font-size: 6rem;
        text-align: center;
        //align-items: center;
        //max-width: 1128px;
        margin: auto;

        padding: 3rem 0rem 2.5rem;
    }
    @media(max-width: 480px){
        h1{
            font-size: 4rem;
        }
    }


    padding: 0rem 0rem 0rem 0rem;
`;

export const Galeria = styled.main`
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    .back{
        height: 100%;
        z-index: 2;
        position: absolute;
        padding-top: 250px;
        padding-right: 0.5rem;
        height: 17.5rem;

        filter: invert(1);
        transform: scaleX(-1);
        cursor: pointer;
    }
    @media(max-width: 1024px){
        .back{
            height: 19.5rem
        }
    }
    @media(max-width: 720px){
        .back{
            height: 19.5rem
        }
    }
    @media (max-width: 480px){
        .back{
            height: 19.5rem
        }
    }

    .next{
        display: block;
        z-index: 2;
        position: absolute;
        padding-top: 250px;
        padding-right: 0.5rem;
        height: 17.5rem;
        filter: invert(1);
        margin-left: 97%;
        cursor: pointer;
    }
    @media(max-width: 1024px){
        .next{
            height: 19.5rem;
            margin-left: 93%;
        }
    }
    @media(max-width: 720px){
        .next{
            height: 19.5rem;
            margin-left: 93%;
        }
    }
    @media (max-width: 480px){
        .next{
            height: 19.5rem;
            margin-left: 93%;
        }
    }




    .container-galeria{
        z-index: 1;
        //position: absolute;
        height: 100%;
        //width: 200px;
        display: grid;
        //grid-template-columns: repeat(6, 1fr,minmax(1080px,1fr));;
        //grid-template-columns: repeat(6, 1fr);
        //grid-template-columns: minmax(720px , 1fr);
        grid-auto-rows: 8rem;
        grid-auto-flow: column;
        grid-auto-columns: minmax(240px,1fr);
        grid-template-columns: 206px 206px 270px 394px 394px;
        grid-template-rows: 300px 100px 100px;
        grid-gap: 0.35rem;
        overflow-y: hidden;
        //height: 593px;
        
        /*grid-template:
            "ft4" 300px
            "ft4" 30px*/
        
            
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
    .h-4{
        grid-row: span 4;
    }
    .w-1{
        grid-column: span 1;
    }
    .w-2{
        grid-column: span 2;
    }

    @media(max-width: 480px){
        .container-galeria{
            grid-template-columns: 130px 130px 170px 274px 274px;
            grid-template-rows: 300px 100px 100px;
            //grid-template-columns: 150px 150px 200px 294px 294px;
            //grid-template-columns: repeat(1, 1fr);
            //grid-auto-rows: 15rem;
        }
    }
    
`;