import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
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
  color: ${(props) => props.theme.text};
  @media screen and (max-width: 576px) {
    top: 1.2rem;
    left: 50%;
  }
`;
const ButtonStyle = styled.button`
  z-index: 5;
  cursor: pointer;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.click && props.theme.text};
  background-color: ${(props) =>
    props.click ? props.theme.body : props.theme.body};
  transform: rotate(${(props) => (props.click ? "120deg" : "-120deg")});
  @media screen and (max-width: 576px) {
    width: 2.5rem;
    height: 2.5rem;
  }
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
    <Main click={click}>
      <span>Off</span>
      <ButtonStyle click={click}>
        <Rotate onClick={() => setClick(!click)} click={click}>
          <ButtonSvg height={35} width={35} fill="currentColor" />
        </Rotate>
      </ButtonStyle>
      <span>On</span>
    </Main>
  );
};

export default Button;
