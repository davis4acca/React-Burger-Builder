import styled from "styled-components";
import burgerLogo from "../../assets/images/burger-logo.png";

export const Logo = styled.img.attrs({
  src: props => props.src || burgerLogo
})`
  height: 100%;
`;
