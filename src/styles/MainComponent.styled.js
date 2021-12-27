import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Teko", sans-serif;
    font-weight: 500;
  }
`;

export const Container = styled.div`
  padding: 0;
`;

const rotate = keyframes`
from{
    transform:rotate(0);
}
to{
    transform:rotate(360deg);
}
`;

export const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "90%" : "50%")};

  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all ease 1s;

  & > :first-child {
    animation: ${rotate} infinite 5s linear;
    color: ${(props) => props.theme.text};
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
    color: ${(props) => props.theme.text};
  }
  @media (min-width: 769px) and (max-width: 1200px) {
    top: ${(props) => (props.click ? "90%" : "50%")};
    left: ${(props) => (props.click ? "90%" : "50%")};
    & > :first-child {
      width: ${(props) => (props.click ? "100px" : "200px")};
      height: ${(props) => (props.click ? "100px" : "200px")};
    }
  }
  @media screen and (max-width: 768px) {
    top: ${(props) => (props.click ? "90%" : "50%")};
    left: ${(props) => (props.click ? "90%" : "50%")};
    & > :first-child {
      width: ${(props) => (props.click ? "60px" : "150px")};
      height: ${(props) => (props.click ? "60px" : "150px")};
    }
  }
`;

export const DarkContainer = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.text};
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;

  @media screen and (max-width: 768px) {
    right: 0%;
    width: ${(props) => (props.click ? "100%" : "0%")};
    height: ${(props) => (props.click ? "50%" : "0%")};
    transition: width 0.5s ease, height 1s ease 0.5s;
  }
`;

export const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2.2rem;
  right: 2rem;
  font-size: 2rem;
  z-index: 3;
  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
    right: 1rem;
  }
`;

export const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  display: ${(props) => props.click && "none"};
  position: absolute;
  top: 50%;
  transform: rotate(90deg) translate(-50%, -50%);
  right: 3rem;
  font-size: 2rem;
  z-index: 3;
  @media screen and (max-width: 576px) {
    font-size: 1.5rem;
    right: 2rem;
  }
`;

export const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  display: ${(props) => props.click && "none"};
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  left: 3rem;
  font-size: 2rem;
  z-index: 3;
  @media screen and (max-width: 576px) {
    font-size: 1.5rem;
    left: 1.8rem;
  }
`;

export const BottomBar = styled.div`
  display: ${(props) => (props.click ? "none" : "flex")};
  justify-content: space-evenly;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 1rem;
`;

export const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  font-size: 2rem;
  z-index: 1;
  @media screen and (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

export const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  font-size: 2rem;
  z-index: 1;
  @media screen and (max-width: 576px) {
    font-size: 1.5rem;
  }
`;
