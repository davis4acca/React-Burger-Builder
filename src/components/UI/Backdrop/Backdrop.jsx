import React from "react";
import { BackdropWrapper } from "./Backdrop.styled";
const backdrop = ({ show, clicked }) =>
  show ? <BackdropWrapper onClick={clicked} /> : null;

export default backdrop;
