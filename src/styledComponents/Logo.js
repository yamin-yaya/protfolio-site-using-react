import React from "react";
import styled from "styled-components";

const LogoName = styled.div`
    h1 {
        margin: 0;
        color: #000;
        font-family: "Crimson Text", serif;
        font-weight: 400;
        font-style: normal; 
        font-size: 3rem;

        @media (max-width: 768px) {
            font-size: 2rem;
        }
`;

const Logo = () => {
    return (
        <LogoName>
        <h1>KR</h1>
      </LogoName>
    );
}

export default Logo;