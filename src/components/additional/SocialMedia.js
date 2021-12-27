import React from "react";
import { NavLink } from "react-router-dom";
import { GitHub, Instagram, Telegram, YouTube } from "./Img/svg";
import styled from "styled-components";
import { motion } from "framer-motion";

const Icons = styled.div`
  diplay: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0rem;
  left: 2rem;
  z-index: 5;

  & > *:not(:last-child) {
    margin: 0.8rem 0;
  }
  @media screen and (max-width: 576px) {
    left: 1rem;
    & > *:not(:last-child) {
      margin: 0.4rem 0;
    }
  }
  @media (min-width: 769px) and (max-width: 924px) {
    left: 1rem;
  }
`;

const Lines = styled(motion.div)`
  margin: 0 auto;
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
  @media screen and (max-width: 576px) {
    height: 5rem;
  }
`;

const Link = styled(NavLink)`
  color: ${(props) => props.theme.text};
  @media screen and (max-width: 576px) {
    & > :nth-child(1) {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;
const SocialMedia = () => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <Link
          onClick={() => {
            window.open("https://github.com/VaxobjanovDev");
          }}
          to="/"
        >
          <GitHub width={30} height={30} fill="currentColor" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <Link
          onClick={() => {
            window.open("https://t.me/VaxobjanovDev");
          }}
          to="/"
        >
          <Telegram width={30} height={30} fill="currentColor" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <Link to="/">
          <Instagram width={30} height={30} fill="currentColor" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <Link to="/">
          <YouTube width={30} height={30} fill="currentColor" />
        </Link>
      </motion.div>

      <Lines
        initial={{
          y: 200,
          transition: { type: "spring", duration: 1.5, delay: 0.5 },
        }}
        animate={{
          y: 0,
          transition: { type: "spring", duration: 1.5, delay: 0.5 },
        }}
      />
    </Icons>
  );
};

export default SocialMedia;
