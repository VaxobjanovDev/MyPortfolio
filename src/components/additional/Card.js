import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import { GitHub } from "./Img/svg";
import { motion } from "framer-motion";

const Box = styled(motion.li)`
  position: relative;
  background: ${(props) => props.theme.text};
  width: 16rem;
  height: 40vh;
  padding: 1rem 1.5rem;
  margin-right: 8rem;
  color: ${(props) => props.theme.text};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.body};
  transition: all ease 2s;

  z-index: 3;
  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }

  @media screen and (max-width: 576px) {
    height: 60vh;
    margin-right: 4rem;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    height: 55vh;
    margin-right: 4rem;
  }
`;
const Visible = styled.div`
  position: absolute;
  display: flex;

  flex-direction: column;
  padding: 1rem 1.5rem;
  justify-content: space-evenly;
  top: -300%;
  left: 0;
  background-color: rgba(${(props) => props.theme.textRgba}, 0.8);
  color: ${(props) => props.theme.body};
  transform: rotate(-180deg);
  ${Box}:hover & {
    top: 0;
    bottom: 0;
    transition: all ease 1s;
    transform: rotate(0deg);
  }
`;
const Title = styled.h1`
  font-size: calc(1em + 1.5vw);
`;
const Description = styled.h2`
  font-size: calc(0.8 + 0.3vw);
  font-family: "Ubuntu Mono", monospace;
  font-weight: 500;
`;
const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;
const Link = styled(NavLink)`
  background-color: ${(props) => props.theme.body};
  text-decoration: none;
  color: ${(props) => props.theme.text};
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1rem + 0.5vw);
`;
const Git = styled(NavLink)`
  color: ${(props) => props.theme.body};
  text-decoration: none;
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
const Card = ({ data }) => {
  const { id, img, name, description, tags, demo, github } = data;
  return (
    <Box key={id} variants={item}>
      <img src={img} alt={name} />
      <Visible>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Tags>
          {tags.map((tag) => (
            <Tag>#{tag}</Tag>
          ))}
        </Tags>
        <Footer>
          <Link
            onClick={() => {
              window.open(demo);
            }}
            to="/"
          >
            Visit
          </Link>
          <Git
            onClick={() => {
              window.open(github);
            }}
            to="/"
          >
            <GitHub width={30} height={30} fill="currentColor" />
          </Git>
        </Footer>
      </Visible>
    </Box>
  );
};

export default Card;
