import styled from "styled-components";
import React from "react";
import Particles from "react-particles-js";

import darkMode from "../config/particle.json";
import lightMode from "../config/light-particle.json";
const Box = styled.div`
  position: absolute;
  inset: 0;
  color: ${(props) => props.theme.text};
  z-index: 0;
`;

const PacrticleComponent = ({ theme }) => {
  return (
    <Box>
      <Particles
        style={{ position: "absolute" }}
        params={theme === "off" ? darkMode : lightMode}
      />
    </Box>
  );
};

export default PacrticleComponent;
