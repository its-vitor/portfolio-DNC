import styled from "styled-components";

export const Section = styled.section`
    max-width: 990px;
    margin: 150px auto;

    display: flex;
    flex-direction: column;
    gap: 38px;

    h1 {
        font-size: 60px;
        color: #21243D;
    }

    p {
        font-size: 20px;
    }

    button {
        border: none;

        background-color: #FF6464;
        color: white;
        width: fit-content;
        padding: 10px 20px;
        font-size: 20px;
        font-weight: 500;
        line-height: 29.38px;
        border-radius: 2px;
        cursor: pointer;
    }
`