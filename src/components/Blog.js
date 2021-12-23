import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Button from "./additional/Button";
import Logo from "./additional/Logo";
import SocialMedia from "./additional/SocialMedia";
import Background from './assets/back2.png'
import BlogPost from "./BlogPost";
import Blogs from "./data/data";
import AnchorComponent from "./additional/Anchor";
import BigTitle from "./additional/BigTitle";

const MainContainer = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
  width: 100%;
  height: auto;

  position: relative;
  padding-bottom: 5rem;
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
`;

const Blog = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let number = (window.innerHeight - 70) / 35;
    setNumber(parseInt(number));
  }, []);

  return (
    <MainContainer>
      <Container>
        <Button />
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
        <BigTitle text="BLOG" top="10%" right="75%"/>
      </Container>
    </MainContainer>
  );
};

export default Blog;
