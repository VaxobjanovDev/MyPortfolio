import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import Logo from "./additional/Logo";
import SocialMedia from "./additional/SocialMedia";

import WorkData from "./data/workData";
import Card from "./additional/Card";
import { MyLogo } from "./additional/Img/svg";
import BigTitle from "./additional/BigTitle";
import { motion } from "framer-motion";

const Box = styled.div`
  height: 550vh;
  position: relative;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.body};
  @media screen and (max-width: 576px) {
    height: 700vh;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    height: 750vh;
  }
`;
const Main = styled(motion.ul)`
  position: fixed;
  top: 15rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  z-index: 3;
  img {
    height: 100%;
  }
  @media screen and (max-width: 576px) {
    top: 8rem;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    top: 12rem;
  }
`;

const Rotate = styled.div`
  position: fixed;
  display: block;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 3;
  color: ${(props) => props.theme.text};
  @media screen and (max-width: 576px) {
    width: 60px;
    height: 60px;
    & > :first-child {
      width: 60px;
      height: 60px;
    }
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Works = () => {
  const ref = useRef(null);
  const myLogo = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      if (ref.current) {
        myLogo.current.style.transform =
          `rotate(` + -window.pageYOffset + `deg)`;
      }
    };

    window.addEventListener("scroll", rotate);

    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <Box>
      <Logo />
      <SocialMedia />
      <Main ref={ref} variants={container} initial="hidden" animate="show">
        {WorkData.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </Main>
      <Rotate ref={myLogo}>
        <MyLogo width={80} height={80} fill="currentColor" />
      </Rotate>
      <BigTitle text="MY WORKS" top="15%" right="20%" />
    </Box>
  );
};

export default Works;
