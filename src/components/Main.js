import React from "react";
import { Container, MainContainer } from "../styles/MainComponent.styled";
import Button from "./additional/Button";
import Logo from "./additional/Logo";
import SocialMedia from "./additional/SocialMedia";

const Main = () => {
  return (
		<MainContainer>
			<Container>
				<Button/>
				<Logo/>
				<SocialMedia/>
			</Container>
		</MainContainer>
	);
};

export default Main;
