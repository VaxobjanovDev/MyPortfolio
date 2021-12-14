import styled from "styled-components";

export const LogoStyle = styled.h1`
  display:inline-block;
  color:${props=>props.theme.text};
  font-family:'Indie Flower', cursive;
  font-weight:800;
  font-size:3rem;

  position:fixed;
  left:2rem;
  top:2rem;
  z-index:1;
`