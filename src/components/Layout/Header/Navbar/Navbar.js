// Navbar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import myLogo from '../../../../image/WhiteHome.svg';
import AboutImg from "../../../../image/person-vcard-fill.svg";
import ProjectImg from "../../../../image/file-earmark-code-fill.svg";
import ContactImg from "../../../../image/person-circle.svg";
import { Logo, LogoLink } from './Logo';
import { AboutImage, ProjectImage, ContactImage, NavItem, NavItems } from './NavItem';
import { useScroll } from '../../../../hooks/useScroll';
// import { animateScroll as scroll } from 'react-scroll';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: ${({ $scrolled }) => ($scrolled ? '#333' : 'transparent')};

  padding: 0.7rem;
  display: flex;
  justify-content: space-between;
`;


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useScroll((scrollY) => {
    const threshold = 250;

    setScrolled(scrollY > threshold);
  });

  return (
    <NavbarContainer $scrolled={scrolled}>
      <LogoLink href='/'>
        <Logo
          src={myLogo}
          alt='My Logo Image'
        />
      </LogoLink>
      <NavItems>
        <NavItem href='#about'>
          <AboutImage
            src={AboutImg}
            alt='About Image'
          />
            About
        </NavItem>
        <NavItem href='#project'>
          <ProjectImage
            src={ProjectImg}
            alt='Project Image'
          />
            Projects
        </NavItem>
        <NavItem href="#contact">
          <ContactImage
            src={ContactImg}
            alt='Contact Image' />
          Contact
        </NavItem>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
