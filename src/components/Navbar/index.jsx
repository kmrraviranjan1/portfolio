import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  // NavBtnLink
} from "./Navbar.style";
const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Ravi</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/skills">Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/resume">Resume</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            {/* <NavBtnLink to="/resume">Resume</NavBtnLink> */}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
