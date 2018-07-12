import React, { Fragment } from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import { Logo } from "../../Logo/Logo.styled";
import { SideDrawerWrapper, LogoWrapper } from "./SideDrawer.styled";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = ({ closed, open, isAuth }) => {
  return (
    <Fragment>
      <Backdrop clicked={closed} show={open} />
      <SideDrawerWrapper open={open} onClick={closed}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <nav>
          <NavigationItems isAuthenticated={isAuth} />
        </nav>
      </SideDrawerWrapper>
    </Fragment>
  );
};

export default sideDrawer;
