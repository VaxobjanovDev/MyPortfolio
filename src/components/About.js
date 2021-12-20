import styled, { keyframes } from "styled-components";
import React from "react";
import { ThemeProvider }  from "styled-components";
import { darkTheme } from "../styles/Theme.styled";
import Button from "./additional/Button";
import Logo from "./additional/Logo";
import PacrticleComponent from "./additional/PacrticleComponent";
import SocialMedia from "./additional/SocialMedia";

import spaceman from './assets/spaceman.jpg'

const Box = styled.div`
  width:100vw;
  height:100vh;
  position:relative;
  overflow:hidden;
  background:${props=>props.theme.body};
`
const float = keyframes`
  0%{transform:translateY(-10px)}
  50%{transform:translateY(15px) translateX(15px)}
  100%{transform:translateY(-10px)}
`
const SpaceMan = styled.div`
  position:absolute;
  top:10%;
  right:5%;
  width:20vw;
  animation: ${float} ease 4s infinite;
  img{
    width:100%;
    height:auto;
  }
`
const Main = styled.div`
  border:2px solid ${props=>props.theme.text};
  color:${props=>props.theme.text};
  padding:2rem;
  width:50vw;
  height:60vh;
  z-index:3;

  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
   
  backdrop-filter:blur(20px);

  position:absolute;
  left:calc(5rem + 5vw);
  top:10rem;

  font-size:calc(0.6rem + 1vw);
  font-style:italic;
  font-family: "Ubuntu Mono", monospace; 
  font-weight:400;
  line-height:1.5;
`

const About = () => {
  return <ThemeProvider theme={darkTheme}>
    <Box>
      <Logo theme='darkTheme'/>
      <SocialMedia theme='darkTheme'/>
      <Button/>
      <PacrticleComponent theme="darkTheme" />

      <SpaceMan>
        <img src={spaceman} alt="spaceman"/>
      </SpaceMan>

      <Main>
        <h3>I'm a front-end developer in Namangan. I can make simple and beatiful website and other useful tools.</h3>
        <h3>I'm interested in Back-end field also. So I'm learning Node js and Express js nowadays.</h3>
        <h3>My law is to the end of learning everything. Also It also doesn’t matter if the growth is minus or plus, the important thing is that it’s done</h3>
      </Main>
    </Box>
  </ThemeProvider>;
};

export default About;
