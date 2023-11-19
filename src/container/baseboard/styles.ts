import styled from "styled-components";

export const Container = styled.main`
    height: 22rem;
    padding: 0rem 0rem;
    background-color: var(--grey);
    text-align: center;
    //text-align: center;

    @media(max-width: 720px){
        {
            height: 32rem;
        }
    }


    .bloco{
        width: 45rem;
        display: inline-block;
    }
    @media(max-width: 720px){
        .bloco{
            width: 5rem;
        }
    }

    .top{
        margin-left: 0rem;
    }

    img{
        height: 10rem;
        width: 10rem;
        object-fit: cover;
        border-radius: 100%;
        object-position: 0rem -0.3rem;
        position: absolute;
        //display: block;
        padding-left: 0rem ;
    }

    h2{ 
        text-align: left;
        color: var(--grey-black);
        //display: inline-block;
        //margin: auto;
        //padding-top: 0.5rem;
        padding-left: 11.5rem;
        padding-top: 0rem;
    }

    .descricao{
        font-weight: 400;
        text-align: left;
        color: var(--font);
        padding-top: 0.5rem;
        padding-left: 11.5rem;
        display: inline-block;
    }


    @media(max-width: 720px){
        h2{
            //width: 50.5rem
            padding-left: 8rem;
        }
        .descricao{
            padding-left: 8rem;
            width: 25rem;
            
        }
        text-align: left;
        .top{
            width: 6.5rem;
            height: 6.5rem;
        }

    }


    .contato{
        //position: absolute;
        //display: inline;
        //margin-left: 10rem;
        padding-top: 1.5rem;
        text-align: center;
        font-size: 1.3rem;
    }
        
    .botao{
        display: inline;
        //position: absolute;
        padding-left: 2.5rem;
        padding-top: 10rem;
        margin-top: 10rem;
    }

    a:link {
        color:var(--font);
        text-decoration:none;
    }

    a:visited {
        color:var(--font);
        text-decoration:none;
    }

    a:hover {
        color: var(--grey-black);
        text-decoration:none;
    }

    .whatsLogo{
        
        margin-top: 0rem;
        height: 2rem;
        width: auto;
        object-fit: cover;
        object-position: 0rem 0rem;
    }
    
    .bnt{
        color: white;
        height: 3rem;
        width: 9rem;
        background-color: green;
        border: none;
        border-radius: 1rem;
        position: absolute;
        margin-left: 4rem;
    }

    .endereco{
        padding-top: 3rem;
        font-weight: 600;
        color: var(--grey-black);
        text-align: center;
    }
    
    .createBy{
        color: var(--font);
        padding-top: 1.5rem;
        padding-bottom: 1rem;
        text-align: center;
    }
`;

export const Content = styled.div`
    max-width: 1128px;
    margin: 0 auto;
    //align-items: center;

    @media(max-width: 480px){
        .a{
            font-size: 1rem;
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }

    /*@media(max-width: 480px){
        content{
            padding-left: 4.5rem;
            padding-right: 1.5rem;
        }
    }*/

    padding-top: 4rem;
    //display: flex;

    /*.card{
        position: absolute;
        background-color: white;
        height: 8rem;
        width: 0.2rem;
        margin-left: 37%;
        margin-top: 1rem;
        border-radius: 1rem;

    }
    
    @media(max-width: 480px){
        .card{
            background-color: var(--grey);
        }
    }*/
    
    .top{
        //align-items: center;
        //justify-content: space-between;
    }
`;