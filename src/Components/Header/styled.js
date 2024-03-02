import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    padding: 20px 0;
    margin: auto;
    
    display: flex;
    justify-content: right;
    width: 100%;
    max-width: 990px;
    gap: 30px;

    font-size: 20px;
    line-height: 29.38px;
`

export const Link = styled(NavLink)`
    color: #000000;
    text-decoration: none;
    font-weight: 600;
`