import React from "react";
import styled from "styled-components";
import Me from './additional/Img/imgonline-com-ua-ReplaceColor-h6zN2RdZYGn-removebg-preview.jpg'

const MyBox = () => {
  const Box = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    width: 55vw;
    height: 40vh;

    background-repeat: no-repeat;
    background-size: 100% 2px;
    background: linear-gradient(
          to right,
          ${(props) => props.theme.body} 50%,
          ${(props) => props.theme.text} 50%
        )
        bottom,
      linear-gradient(
          to right,
          ${(props) => props.theme.body}50%,
          ${(props) => props.theme.text}50%
        )
        top;

    border-left: 2px solid ${(props) => props.theme.body};
    border-right: 2px solid ${(props) => props.theme.text};
    z-index: 3;
  `;
  return (
    <Box>
      <BoxContainer>
				<Text>
					<h1>Hello everyone</h1>
					<h3>I'm Vaxobjanov G'avsiddin</h3>
					<h6>I'm a web developer</h6>
				</Text>
			</BoxContainer>
			<BoxContainer>
				<div>
					<img style={{background:'transparent'}} src={Me}/>
				</div>
			</BoxContainer>
    </Box>
  );
};

export default MyBox;
