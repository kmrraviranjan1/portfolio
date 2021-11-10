import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  // SidebarRoute,
} from "./Sidebar.style";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="/">
            About
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/skills">
            Skills
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/projects">
            Projects
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/contact">
            Contact
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/resume">
            Resume
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      <SideBtnWrap>
        {/* <SidebarRoute to="/resume">Resume</SidebarRoute> */}
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
