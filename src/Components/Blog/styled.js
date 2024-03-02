import styled from "styled-components";

export const Section = styled.section`
    padding:  0 0 32px;

    background: linear-gradient(90deg, #EDF7FA 95%, transparent 95%);
    
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        width: 100%;
        max-width: 990px;
        font-weight: 400;
        color: #21243D;
        font-size: 22px;
        line-height: 60px;
    }
`

export const Blogs = styled.div`
    display: flex;
    gap: 100px;
    max-width: 990px;
`

export const Blog = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    max-width: 500px;

    background-color: white;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0px 4px 10px 0px #BBE1FA40;

    h1 {
        font-size: 26px;
        line-height: 38.19px;
        color: #21243D;
    }

    div {
        display: flex;
        flex-direction: row;
        gap: 40px;

        font: 18px;
    }
`