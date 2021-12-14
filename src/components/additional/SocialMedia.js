import React from "react";
import { NavLink } from "react-router-dom";
import { Icons } from "../styles/Icons";
import { Line } from "../styles/Line";
import { GitHub, Instagram, Telegram, YouTube } from "./Img/svg";

const SocialMedia = () => {
  return (
    <Icons>
      <div>
        <NavLink to="/">
          <GitHub width={25} height={25} />
        </NavLink>
      </div>
      <div>
        <NavLink to="/">
          <Telegram width={25} height={25} />
        </NavLink>
      </div>
      <div>
        <NavLink to="/">
          <Instagram width={25} height={25} />
        </NavLink>
      </div>
      <div>
        <NavLink to="/">
          <YouTube width={25} height={25} />
        </NavLink>
      </div>

      <Line />
    </Icons>
  );
};

export default SocialMedia;
