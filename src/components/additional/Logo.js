import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LogoStyle = styled.h1`
  display: inline-block;
  font-family: "Indie Flower", cursive;
  font-weight: 800;
  font-size: 3rem;
  corsor: pointer;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 5;
  @media screen and (max-width: 576px) {
    font-size: calc(1.2rem + 0.5vw);
    top: 2.2rem;
    left: 1rem;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    font-size: calc(1.5rem + 1.5vw);
    top: 2.5rem;
  }
`;
const Link = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.text};
`;
const Link2 = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.body};
`;

const Logo = (props) => {
  return (
    <LogoStyle>
      {props.click ? (
        <Link2 to="/">ReactDev</Link2>
      ) : (
        <Link to="/">ReactDev</Link>
      )}
    </LogoStyle>
  );
};

export default Logo;
