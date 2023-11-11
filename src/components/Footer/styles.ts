import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  font-size: 12px;
  margin-top: 150px;
  max-width: 100vw;
  padding: 2em 6.25em;
  background: #292929;
  color: white;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;

  & span {
    font-weight: bold;
    font-size: 14px;
  }

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    & a {
      color: white;
      text-decoration: underline;
    }
  }

  & a {
    color: white;
  }
`;

export const MiddleCol = styled.div`
  a {
    display: block;
    padding: 0.4em 0;
  }
`;

export const Col3 = styled.div`
  & a {
    display: block;
    margin: 1rem 0;
  }
`;

export const StyledNavLinkContainer = styled.div`
  margin-top: 1rem;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: underline;
  color: black;
  font-size: 12px;
  position: relative;
`;
