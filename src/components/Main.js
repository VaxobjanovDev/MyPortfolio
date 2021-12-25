import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  About,
  Blog,
  BottomBar,
  Center,
  Contact,
  Container,
  DarkContainer,
  MainContainer,
  Skills,
  Work,
} from "../styles/MainComponent.styled";
import { MyLogo } from "./additional/Img/svg";
import Logo from "./additional/Logo";
import SocialMedia from "./additional/SocialMedia";
import MyBox from "./MyBox";

const Main = () => {
  const [click, setClick] = useState(false);
  return (
    <MainContainer>
      <Container>
        <Logo />
        <SocialMedia click={click} />
        <DarkContainer click={click} />
        <Center click={click}>
          <MyLogo
            fill="currentColor"
            onClick={() => setClick(!click)}
            width={click ? 150 : 250}
            height={click ? 150 : 250}
          />
          <span>Click Me</span>
        </Center>
        <Contact to={{ pathname: "asda" }}>
          <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            Write me...
          </motion.h3>
        </Contact>
        <Blog to="/blog">
          <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            Blog
          </motion.h3>
        </Blog>
        <Work to="/works" click={click}>
          <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            Work
          </motion.h3>
        </Work>
        <BottomBar>
          <About to="/about" click={click}>
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              About
            </motion.h3>
          </About>
          <Skills to="/skills">
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              My Skills
            </motion.h3>
          </Skills>
        </BottomBar>
        {click && <MyBox />}
      </Container>
    </MainContainer>
  );
};

export default Main;
