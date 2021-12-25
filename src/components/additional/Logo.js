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
  z-index: 3;

  @media screen and (max-width:576px){
    font-size: calc(1.2rem + 0.5vw);
    top: 2.2rem;
    left: 1rem; 
  }
`;
const Link = styled(NavLink)`
  text-decoration: none;
  color: ${props=>props.theme.text};
`;

const Logo = () => {
  return (
    <LogoStyle>
      <Link to="/">ReactDev</Link>
    </LogoStyle>
  );
};

export default Logo;
