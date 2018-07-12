import styled, {
  css
} from "styled-components";
const Button = styled.button `
  background-color: transparent;
  border: none;
  color: "white";
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }

  ${props => (props.success ? `color: #5C9210` : ``)};
  ${props => (props.danger ? `color: #944317` : ``)};
  

  ${props => props.disabled && css`
    color: #ccc;
    cursor :not-allowed;
  `}
`;

export default Button;