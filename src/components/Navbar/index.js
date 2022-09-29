import React, {useEffect, useState} from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

export const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
        console.log("skrr");
    }

  return (
    <>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo onClick={toggleHome}>Solteria</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='about' 
                    smooth={true} duration={500} spy={true} 
                    exact='true' offset={-80}>About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='governance'
                    smooth={true} duration={500} spy={true} 
                    exact='true' offset={-80}>Governance</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='faq'
                    smooth={true} duration={500} spy={true} 
                    exact='true' offset={-80}>FAQ</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/">Enter App</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
    </>
  )
}
