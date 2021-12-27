import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Logo from "./additional/Logo";
import SocialMedia from "./additional/SocialMedia";
import Background from "./assets/back2.png";
import BlogPost from "./BlogPost";
import Blogs from "./data/data";
import AnchorComponent from "./additional/Anchor";
import BigTitle from "./additional/BigTitle";
import { motion } from "framer-motion";

const MainContainer = styled(motion.div)`
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.7)`};
  width: 100%;
  height: auto;
  overflow-x: hidden;
  position: relative;
  padding-bottom: 5rem;
  @media screen and (max-width: 576px) {
    & > :last-child {
      right: 50%;
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    & > :last-child {
      right: 65%;
    }
  }
`;
const Center = styled.div`
  padding-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(5rem + 1vw);

  @media (min-width: 577px) and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(calc(10rem + 20vw), 1fr));
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(1, minmax(calc(10rem + 2vw), 1fr));
  }
  @media (min-width: 769px) and (max-width: 924px) {
    grid-gap: calc(2rem + 1vw);
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

const Blog = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let number = (window.innerHeight - 70) / 35;
    setNumber(parseInt(number));
  }, []);

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Container>
        <Logo />
        <SocialMedia />
        <AnchorComponent number={number} />
        <Center>
          <Grid>
            {Blogs.map((blog) => (
              <BlogPost key={blog.id} blog={blog} />
            ))}
          </Grid>
        </Center>
        <BigTitle text="BLOG" top="10%" right="75%" />
      </Container>
    </MainContainer>
  );
};

export default Blog;
