import React from "react";
import { StyledDrawerToggle } from "./DrawerToggle.styled";

const drawerToggle = ({ clicked }) => (
  <StyledDrawerToggle onClick={clicked}>
    <div />
    <div /> <div />
  </StyledDrawerToggle>
);

export default drawerToggle;
