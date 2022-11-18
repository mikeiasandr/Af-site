import styled from "styled-components";

export const Container = styled.header`
    background: var(--header);

    h1 {
        font-weight: 400;
    }

    a:link {
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

    img{
        width: 3rem;
        filter: invert(1);
    }
`;

export const Content = styled.div`
    max-width: 1128px;
    margin: 0 auto;

    padding: 0.75rem 1rem 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;