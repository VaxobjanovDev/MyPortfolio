import styled from "styled-components";
import React from "react";
import Button from "./additional/Button";
import Logo from "./additional/Logo";
import SocialMedia from "./additional/SocialMedia";
import Background from "./assets/kisspng-astronaut-drawing-royalty-free-astronauta-ni-ntilde-o-5b4fbbece9bf76.9583068315319521089574.jpg";
import BlogPost from "./BlogPost";
import Blogs from "./data/data";


const MainContainer = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
  width: 100%;
  height: auto;

  position: relative;
  padding-bottom: 5rem;
`;
const Center = styled.div`
  padding-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 1vw);
`;

const Blog = () => {
  return (
    <MainContainer>
      <Container>
        <Button />
        <Logo />
        <SocialMedia />
        <Center>
          <Grid>
						{Blogs.map((blog)=>(
							<BlogPost key={blog.id} blog={blog} />
						))}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  );
};

export default Blog;
