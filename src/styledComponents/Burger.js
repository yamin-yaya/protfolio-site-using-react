import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";



const Burger = ({open, onClick}) => {

  const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    transition: all 0.3s linear;

    .burgerIcon {
        font-size: 1.5rem;
        color: #15120d;
        cursor: pointer;
        display: ${ ({open}) => ( open ? 'none': 'flex')};
    }

    .closeIcon {
        font-size: 1.5rem;
        color: white;
        cursor: pointer;
        display: ${ ({open}) => ( open ? 'flex': 'none')};
    }
  }
`;
  
  return (
    <StyledBurger open={open} onClick={onClick}>
        <FontAwesomeIcon icon={faBars} className='burgerIcon' />
        <FontAwesomeIcon icon={faX} className='closeIcon'  />
    </StyledBurger>
  );
}

export default Burger;