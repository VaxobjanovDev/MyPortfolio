import React from "react";
import styled from "styled-components";
import Me from "./assets/back.png";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 68vw;
  height: 45vh;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 3;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(
          ${(props) => props.theme.text} 50%,
          ${(props) => props.theme.body} 50%
        )
        0px 0px / 2px 100% no-repeat,
      linear-gradient(
          ${(props) => props.theme.text} 50%,
          ${(props) => props.theme.body} 50%
        )
        2px 100%;

    background-position: 0px 0px, 100% 0px;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
  }
`;

const BoxContainer = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  background:transparent;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: 90%;
  }
 @media(min-width:577px) and (max-width:768px){
      width: 100%;
      height:auto;
      .pic {
        width:80%;
        height: auto;
      }
  }
  @media screen and (max-width:576px){
    width: 100%;
    height:auto;
    .pic {
      width:100%;
      height: auto;
    }
 
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > :last-child {
    color: ${(props) => props.theme.bodyRgba};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
  @media screen and (max-width: 576px) {
    font-size: calc(1em + 1.5vw);
  }
`;

const MyBox = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "65vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <BoxContainer>
        <Text>
          <h1>Hello everyone</h1>
          <h3>I'm Vaxobjanov G'avsiddin</h3>
          <h6>I'm a Junior Web Developer</h6>
        </Text>
      </BoxContainer>
      <BoxContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Background" />
        </motion.div>
      </BoxContainer>
    </Box>
  );
};

export default MyBox;
