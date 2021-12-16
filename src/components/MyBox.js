import React from "react";
import styled from "styled-components";
import Me from "../components/assets/png-transparent-astronaut-astronaut-artist-drawing-printmaking-astronaut-poster-outer-space-painting.png";
import { motion } from "framer-motion";



const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  width: 65vw;
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
`;

const BoxContainer = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: auto;
		background:transparent;
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
`;

const MyBox = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "40vh" }}
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
					initial={{opacity:0}}
					animate={{opacity:1}}
					transition={{duration:1,delay:2}}
				>
          <img className="pic" src={Me} />
        </motion.div>
      </BoxContainer>
    </Box>

  );
};

export default MyBox;
