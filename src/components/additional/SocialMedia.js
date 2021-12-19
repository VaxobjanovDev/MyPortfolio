import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Icons } from "./styles/Icons";
import { Lines } from "./styles/Lines";
import { GitHub, Instagram, Telegram, YouTube } from "./Img/svg";
import { darkTheme } from "../../styles/Theme.styled";

const SocialMedia = (props) => {
  return (
    <Icons>
      <div>
        <Link target="_blank" to="https://github.com/VaxobjanovDev">
          <GitHub
            width={30}
            height={30}
            fill={props.theme === "darkTheme" ? darkTheme.text : darkTheme.body}
						
          />
        </Link>
      </div>
      <div>
        <NavLink
          aria-current="false"
          target="_blank"
          to={{ pathname: "https://t.me/VaxobjanovDev" }}
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

      <Lines color={props.theme}/>
    </Icons>
  );
};

export default SocialMedia;
