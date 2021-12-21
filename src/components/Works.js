import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/Theme.styled";
import Button from "./additional/Button";
import Logo from "./additional/Logo";
import SocialMedia from "./additional/SocialMedia";

import WorkData from "./data/workData";
import Card from "./additional/Card";
import { MyLogo } from "./additional/Img/svg";
import BigTitle from "./additional/BigTitle";

const Box = styled.div`
  height:550vh;
  position: relative;
  display:flex;
  align-items:center;
  background: ${(props) => props.theme.body};
`;
const Main = styled.div`
  position: fixed;
  top: 15rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  z-index:3;
  img {
    height: 100%;
  }
`;

const Rotate = styled.div`
	position:fixed;
	display:block;
	right:1rem;
	bottom:1rem;
	width:80px;
	height:80px;
	z-index:3;
`
const Works = () => {
  const ref = useRef(null);
	const myLogo = useRef(null)

  useEffect(() => {
    let element = ref.current;
	

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
			myLogo.current.style.transform = `rotate(` + -window.pageYOffset + `deg)`
    };

    window.addEventListener("scroll", rotate);

    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Logo theme="darkTheme" />
        <SocialMedia theme="darkTheme" />
        <Button />
        <Main ref={ref}>
          {WorkData.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </Main>
				<Rotate ref={myLogo}>
					<MyLogo width={80} height={80} fill={darkTheme.text}/>
				</Rotate>
				<BigTitle text="MY WORKS" top='15%' right='20%' />
      </Box>
    </ThemeProvider>
  );
};

export default Works;
