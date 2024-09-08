import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import AboutMeSection from "../components/AboutMeSection";
import ProjectsSection from "../components/ProjectSection";
import ContactMeSection from "../components/ContactMeSection";
import LandingSection from "../components/LandingSection";
import Home from "../components/Home";

const NavbarStyled = styled.nav`
    ul {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
    }

    a {
        color: #333;
        text-decoration: none;
    }

   @media (max-width: 768px) {
        margin: 0;
        flex-direction: column;
        text-align: left;
        justify-content: center;
        align-item: center;
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        background-color: #15120d;
        transition: transform 0.3s ease-in-out;
        transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

    ul {
        margin-top: 67px;
        list-style: none;
        display: flex;
        flex: wrap;
        flex-direction: column;
        padding: 2rem;
        background-color: rgba(21, 21, 13, 0.5);
        justify-content: center;
        margin-left: auto;
    }

    li {
        border: 1px solid #f4f4f4;
        margin-bottom: 10px;
        border-radius: 16px;
        padding: 10px 15px;
    }

    li:hover {
        box-shadow: #f4f4f4 0 8px 15px;
        transform: translateY(-2px);
    }

    a {
        color: white;
    }
  }
`;

const Navbar = ({open}) => {
  return(
    <NavbarStyled open= {open}>
        <ul>
          <li><Link to="/" component={LandingSection}>HOME</Link></li>
          <li><Link to="/about" element={AboutMeSection}>ABOUT</Link></li>
          <li><Link to="/projects" component={ProjectsSection}>PROJECTS</Link></li>
          <li><Link to="/contact" component={ContactMeSection}>CONTACT</Link></li>
        </ul>
      </NavbarStyled>
  );
}

export default Navbar;