import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./Sidebar.style";
const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="skills">Skills</SidebarLink>
          <SidebarLink to="project">Projects</SidebarLink>
          <SidebarLink to="contact">Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      <SideBtnWrap>
        <SidebarRoute to="/resume">Resume</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
