import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 5em;
    height: auto;
  }
`;

export const Navigation = styled.nav`
  margin: 4em;

  & ul {
    display: flex;
    gap: 4.1em;
    list-style-type: none;
    margin: 0;
  }

  & a {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-size: 1.6rem;
    position: relative;

    &.active::before {
      position: absolute;
      content: "";
      width: 35%;
      height: 1px;
      border-bottom: 2px solid black;
      bottom: -6px;
    }
  }
`;

export const StyledNavLinkContainer = styled.div`
  display: flex;
  gap: 4.1em;
  margin: 4em;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-size: 1.6rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    background-color: #000;
    height: 2px;
    width: 100%;
    left: 0;
    bottom: -2px;
    transition: 0.2s ease;
    transform: scaleX(0);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
