import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Box = styled(NavLink)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(5px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  z-index: 1;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    width: calc(20rem + 15vw);
  }
`;

const Container = styled(motion.div)``;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  background-size: cover;
  height: 60%;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h3`
  font-weight: 700;
  color: inherit;
  padding-top: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;
const Hashtags = styled.div`
  padding: 0.5rem 0;
`;

const Tag = styled.span`
  padding-right: 0.5rem;
`;
const Date = styled.span`
  padding-right: 0.5rem;
`;

const item = {
  hidden: {
    scale: 0.5,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};
const BlogPost = ({ blog }) => {
  return (
    <Container variants={item}>
      <Box to="/">
        <Image img={blog.imgSrc} />
        <Title>{blog.name}</Title>
        <Hashtags>
          {blog.tags.map((tag, id) => (
            <Tag key={id}>#{tag}</Tag>
          ))}
        </Hashtags>
        <Date>{blog.date}</Date>
      </Box>
    </Container>
  );
};

export default BlogPost;
