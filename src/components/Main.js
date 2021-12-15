import React, { useState } from "react";
import { About, Blog, BottomBar, Center, Contact, Container, DarkContainer, MainContainer, Skills, Work } from "../styles/MainComponent.styled";
import Button from "./additional/Button";
import { MyLogo } from "./additional/Img/svg";
import Logo from "./additional/Logo";
import SocialMedia from "./additional/SocialMedia";
import MyBox from "./MyBox";

const Main = () => {

	const [click, setClick] = useState(false)
  return (
		<MainContainer>
			<Container>
				<Button/>
				<Logo theme={click?'dark':'light'}/>
				<SocialMedia theme={click?'dark':'light'}/>
				<DarkContainer click={click}/>
				<Center click={click}>
					<MyLogo onClick={()=>setClick(!click)} width={click?150:250} height={click?150:250}/>
					<span>Click Me</span>
				</Center>
				<Contact to={{pathname:"asda"}}>
					<h3>
						Write me...
					</h3>
				</Contact>
				<Blog to="/blog">
					<h3>
						Blog
					</h3>
				</Blog>
				<Work to="/work" click={click}>
					<h3>
						Work
					</h3>
				</Work>
			<BottomBar>
			<About to="/about" click={click}>
					<h3>
						About
					</h3>
				</About>
				<Skills to="/skills">
					<h3>
						My Skills
					</h3>
				</Skills>
			</BottomBar>
			{click&&<MyBox/>}
			</Container>
		</MainContainer>
	);
};

export default Main;
