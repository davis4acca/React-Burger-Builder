import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationItem = styled.li`
  margin: 10px 0;
  display: block;
  width: 100%;

  & a {
    color: #8f5c2c;
    width: 100%;
    display: block;
    text-decoration: none;
  }

  &a:hover,
  &a:active,
  &a.active {
    color: #40a4c8;
  }

  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;

    & a {
      color: white;
      height: 100%;
      padding: 16px 10px;
      border-bottom: 4px solid transparent;
    }

    & a:hover,
    & a:active {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: white;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  &&&.${props => props.activeClassName} {
    background-color: #8f5c2c;
    border-bottom: 4px solid #40a4c8;
    color: white;
  }
`;
