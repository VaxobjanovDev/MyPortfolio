import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import { GitHub } from "./Img/svg";

const Box = styled.li`
  position: relative;
  background: ${(props) => props.theme.text};
  width: 16rem;
  height: 40vh;
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  color: ${(props) => props.theme.text};
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.body};
  transition: all ease 2s;

  z-index: 3;
  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;
const Visible = styled.div`
  border-radius: 0 50px 0 50px;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  justify-content: space-evenly;
  top: -200%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  ${Box}:hover & {
    top: 0;
    bottom: 0;
    transition: all ease 1s;
  }
`;
const Title = styled.h1`
  font-size: calc(1em + 0.5vw);
`;
const Description = styled.h2`
  font-size: calc(0.8 + 0.3vw);
  font-family: sans-serif;
  font-weight: 500;
`;
const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.text};
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
  background-color: ${(props) => props.theme.text};
  text-decoration: none;
  color: ${(props) => props.theme.body};
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1rem + 0.5vw);
`;
const Git = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
`;
const Card = ({ data }) => {
  const { id, img, name, description, tags, demo, github } = data;
  return (
    <Box>
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
          <Link to={{ pathname: `${demo}` }} target="_blank">
            Visit
          </Link>
          <Git to={{ pathname: `${github}` }} target="_blank">
            <GitHub width={30} height={30} fill="currentColor" />
          </Git>
        </Footer>
      </Visible>
    </Box>
  );
};

export default Card;
