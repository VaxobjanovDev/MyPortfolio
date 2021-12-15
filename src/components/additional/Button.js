import React from "react";
import { NavLink } from "react-router-dom";
import { ButtonStyle } from "./styles/Button.styled";
import { ButtonSvg } from "./Img/svg";
const Button = () => {
  return (
    <ButtonStyle>
      <NavLink to="/">
        <ButtonSvg height={50} width={50} fill="currentColor" />
      </NavLink>
    </ButtonStyle>
  );
};

export default Button;
