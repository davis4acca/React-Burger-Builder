import React from "react";
import { ToolbarWrapper, LogoWrapper, Nav } from "./Toolbar.styled";
import NavigationItems from "../NavigationItems/NavigationItems";
import { Logo } from "../../Logo/Logo.styled";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = ({ drawerToggleClicked, isAuth }) => (
  <ToolbarWrapper>
    <DrawerToggle clicked={drawerToggleClicked} />
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <Nav desktopOnly>
      <NavigationItems isAuthenticated={isAuth} />
    </Nav>
  </ToolbarWrapper>
);

export default toolbar;
