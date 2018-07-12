import React from "react";
import {
  BuildControlWrapper,
  Label,
  LessButton,
  MoreButton
} from "./BuildControl.styled";

const buildControl = ({ label, added, removed, disabled }) => (
  <BuildControlWrapper>
    <Label> {label} </Label>
    <LessButton onClick={removed} disabled={disabled}>
      less
    </LessButton>
    <MoreButton onClick={added}>more</MoreButton>
  </BuildControlWrapper>
);

export default buildControl;
