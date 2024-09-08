import React, {useState} from 'react';
import Logo from '../styledComponents/Logo';
import styled from 'styled-components';
import Burger from '../styledComponents/Burger';
import Navbar from '../styledComponents/Navbar';
import SocialIconLink from '../styledComponents/SocialIconLink';


const HeaderContainer = styled.header`
    padding: 8px 100px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        padding-left: 20px;
    }
`;


const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <HeaderContainer>
        <Logo />
        <Burger open={open} onClick={handleClick}/>
        <Navbar open={open} />
        <SocialIconLink />
    </HeaderContainer>
  );
};

export default Header;
