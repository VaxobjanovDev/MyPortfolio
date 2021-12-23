import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/Theme.styled";
import BigTitle from "./additional/BigTitle";
import Button from "./additional/Button";
import { BackEnd, FrontEnd } from "./additional/Img/svg";
import Logo from "./additional/Logo";
import PacrticleComponent from "./additional/PacrticleComponent";
import SocialMedia from "./additional/SocialMedia";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: ${(props) => props.theme.body};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Main = styled.div`
  width: 30vw;
  height: 60vh;
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.body};
  z-index: 3;
  padding: 2rem;
  line-height: 1.5;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Ubuntu Mono", monospace;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;
const Title = styled.h2`
  font-size: calc(1em + 1vw);
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  font-size: calc(0.6em + 1vw);
  color: ${(props) => props.theme.text};
  padding: 0.5rem 0;

  strong {
    text-transform: uppercase;
  }

  p {
    margin-left: 2rem;
  }

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;
const Skills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <Logo theme='lightTheme'/>
        <SocialMedia theme='lightTheme'/>
        <Button />
        <PacrticleComponent theme="lightTheme" />
        <Main>
          <Title>
            <FrontEnd width={70} height={70} fill='currentColor' />
            Front End Developer
          </Title>
          <Description>
            I am a frontend developer. I have been practicing this field for
            over a year
          </Description>
          <Description>
            <strong>Skills:</strong>
            <p>Html, Css, Javascript, React, Bootstrap etc.</p>
          </Description>
          <Description>
            <strong>Tools:</strong>
            <p>VScode, Github, Stackoverflow, You Tube, Google</p>
          </Description>
        </Main>
        <Main>
          <Title>
            <BackEnd width={70} height={70}  fill='currentColor'/>
            Back End Developer
          </Title>
          <Description>
            I am also currently studying the Backend field.
          </Description>
          <Description>
            <strong>Studying resource:</strong>
            <p>Udemy cource, You Tube, Dadajanov's lessons and others.</p>
          </Description>
          <Description>
            <strong>Tools:</strong>
            <p>Node js, Express js, MongoDb and others.</p>
          </Description>
        </Main>
        <BigTitle text="MY SKILLS" top="80%" left="40%"/>
      </Box>
    </ThemeProvider>
  );
};

export default Skills;
