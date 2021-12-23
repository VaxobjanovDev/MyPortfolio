import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { darkTheme } from "../../styles/Theme.styled";

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
`;
const Link = styled(NavLink)`
  text-decoration: none;
  color: ${(props) =>
    props.color === "darkTheme" ? darkTheme.text : darkTheme.body};
`;

const Logo = ({ theme }) => {
  return (
    <LogoStyle>
      <Link color={theme} to="/">VaxobjanovDev</Link>
    </LogoStyle>
  );
};

export default Logo;
