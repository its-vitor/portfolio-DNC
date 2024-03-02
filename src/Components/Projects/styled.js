import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
    gap: 20px;

    h2 {
        width: 100%;
        max-width: 990px;
        font-weight: 400;
        color: #21243D;
        font-size: 22px;
        line-height: 60px;
    }
`

export const Projects = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;
    max-width: 990px;

    hr {
        border: none;
        height: 2px;
        background-color: #E0E0E0;
    }

    h1 {
        color: #21243D;
        font-size: 30px;
    }
`

export const Project = styled.div`
    display: flex;
    gap: 50px;
    
    div {
        display: flex;
        flex-direction: column;

        img {
            border-radius: 10px;
            width: 260px;
        }
    }
`