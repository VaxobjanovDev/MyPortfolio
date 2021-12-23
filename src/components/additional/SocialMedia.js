import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GitHub, Instagram, Telegram, YouTube } from "./Img/svg";
import { darkTheme } from "../../styles/Theme.styled";
import styled from "styled-components";

const Icons = styled.div`
  diplay: flex !important;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0rem;
  left: 2rem;

  z-index: 5;

  & > *:not(:last-child) {
    margin: 0.8rem 0;
  }
`;

const Lines = styled.div`
  margin: 0 auto;
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "darkTheme" ? darkTheme.text : darkTheme.body};
`;

const SocialMedia = (props) => {
  return (
    <Icons>
      <div>
        <Link
          onClick={() => {
            window.open("https://github.com/VaxobjanovDev");
          }}
          to="/"
        >
          <GitHub
            width={30}
            height={30}
            fill={props.theme === "darkTheme" ? darkTheme.text : darkTheme.body}
          />
        </Link>
      </div>
      <div>
        <NavLink
          onClick={() => {
            window.open("https://t.me/VaxobjanovDev");
          }}
          to="/"
        >
          <Telegram
            width={30}
            height={30}
            fill={props.theme === "darkTheme" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink to="/">
          <Instagram
            width={30}
            height={30}
            fill={props.theme === "darkTheme" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink to="/">
          <YouTube
            width={30}
            height={30}
            fill={props.theme === "darkTheme" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>

      <Lines color={props.theme} />
    </Icons>
  );
};

export default SocialMedia;
