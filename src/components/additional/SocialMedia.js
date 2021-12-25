import React from "react";
import { NavLink } from "react-router-dom";
import { GitHub, Instagram, Telegram, YouTube } from "./Img/svg";
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
  @media screen and (max-width:576px){
    left: 1rem; 
    & > *:not(:last-child) {
      margin: 0.4rem 0;
    } 
  }
`;

const Lines = styled.div`
  margin: 0 auto;
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>props.theme.text};
  @media screen and (max-width:576px){
    height: 5rem;  
  }

`;

const Link = styled(NavLink)`
  color:${props=>props.theme.text};
  @media screen and (max-width:576px){
    &>:nth-child(1){
      width:1.2rem;
      height:1.2rem
    }
  }
`
const SocialMedia = () => {
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
            fill="currentColor"
          />
        </Link>
      </div>
      <div>
        <Link
          onClick={() => {
            window.open("https://t.me/VaxobjanovDev");
          }}
          to="/"
        >
          <Telegram
            width={30}
            height={30}
            fill="currentColor"
          />
        </Link>
      </div>
      <div>
        <Link to="/">
          <Instagram
            width={30}
            height={30}
            fill="currentColor"
          />
        </Link>
      </div>
      <div>
        <Link to="/">
          <YouTube
            width={30}
            height={30}
            fill="currentColor" 
          />
        </Link>
      </div>

      <Lines  />
    </Icons>
  );
};

export default SocialMedia;
