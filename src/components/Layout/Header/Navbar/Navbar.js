// Navbar.js
import React from 'react';
import styled from 'styled-components';
import myLogo from '../../../../image/WhiteHome.svg';
import AboutImg from "../../../../image/person-vcard-fill.svg";
import ProjectImg from "../../../../image/file-earmark-code-fill.svg";
import ContactImg from "../../../../image/person-circle.svg";
import { Logo, LogoLink } from './Logo';
import { AboutImage, ProjectImage, ContactImage, NavItem, NavItems } from './NavItem';

const NavbarContainer = styled.nav`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background: none;
  border: none;
`;


const Navbar = () => {
    return (
        <NavbarContainer>
            <LogoLink href='/'>
                <Logo 
                  src={myLogo}
                  alt='My Logo Image'
                />
            </LogoLink>
            <NavItems>
                <NavItem href="#home">
                  <AboutImage 
                    src={AboutImg} 
                    alt='About Image' 
                    />
                  About
                </NavItem>
                <NavItem href="#about">
                  <ProjectImage
                    src={ProjectImg}
                    alt='Project Image' 
                    />
                  Projects
                </NavItem>
                <NavItem href="#contact">
                  <ContactImage 
                    src={ContactImg}
                    alt='Contact Image'/>
                  Contact
                  </NavItem>
            </NavItems>
        </NavbarContainer>
    );
};

export default Navbar;
