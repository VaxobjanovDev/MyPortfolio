import styled from "styled-components";
import React from "react";

const Text = styled.h1`
  position: fixed;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
	left: ${(props) => props.left};
  font-size: calc(5rem + 5vw);
  z-index: 0;
  color: ${(props) => `rgba(${props.theme.textRgba},0.1)`};
`;
const BigTitle = (props) => {
  return (
    <Text top={props.top} right={props.right} left={props.left}>
      {props.text}
    </Text>
  );
};

export default BigTitle;
