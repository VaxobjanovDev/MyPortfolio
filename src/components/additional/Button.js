import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { ButtonSvg } from "./Img/svg";

const rotate = keyframes`
from{
    transform:rotate(120deg);
}
to{
    transform:rotate(360deg);
}
`;
const rotates = keyframes`
from{
  transform:rotate(-120deg);
}
to{
  transform:rotate(-360deg);
}
`;
const Main = styled.div`
  color: #000000;
  position: fixed;
  transform: translate(-50%, 0);
  left: 50%;
  top: 2rem;
  z-index: 5;
  & > *:nth-child(1) {
    color: ${(props) => props.theme.body};
  }
`;
const ButtonStyle = styled.button`
  z-index: 5;
  cursor: pointer;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  background-color: ${(props) => props.theme.body};
  transform: rotate(${(props) => (props.click ? "120deg" : "-120deg")});
`;

const Link = styled(NavLink)`
  text-decoration: none;
`;
const Rotate = styled.div`
  animation: ${(props) =>
      props.click
        ? css`
            ${rotate}
          `
        : css`
            ${rotates}
          `}
    linear 0.8s;
`;

const Button = () => {
  const [click, setClick] = useState(false);

  return (
    <Main>
      <span>Off</span>
      <ButtonStyle click={click}>
        <Rotate onClick={() => setClick(!click)} click={click}>
          <Link to="/">
            <ButtonSvg height={50} width={50} />
          </Link>
        </Rotate>
      </ButtonStyle>
      <span>On</span>
    </Main>
  );
};

export default Button;
