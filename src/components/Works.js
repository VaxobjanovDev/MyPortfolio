import styled, { keyframes } from "styled-components";
import React from "react";
import { ThemeProvider }  from "styled-components";
import { darkTheme } from "../styles/Theme.styled";
import Button from "./additional/Button";
import Logo from "./additional/Logo";
import SocialMedia from "./additional/SocialMedia";

import card from './assets/card.png'

const Box = styled.div`
  width:100vw;
  height:100vh;
  position:relative;
  overflow:hidden;
  background:${props=>props.theme.body};
`
const Card = styled.div`
	width:250px;
	height:400px;

	img{
		width:100%;
		height:100%;
	}
`
const Works = () => {
  return <ThemeProvider theme={darkTheme}>
    <Box>
      <Logo theme='darkTheme'/>
      <SocialMedia theme='darkTheme'/>
      <Button/>

        <Card>
            <img src={card} alt='cardimage'/>
        </Card>
    </Box>
  </ThemeProvider>;
};

export default Works;
