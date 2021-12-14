import styled from "styled-components";

export const MainContainer = styled.div`

background:${props=>props.theme.body};
height:100vh;
width:100vw;
overflow:hidden;

position:relative;

h2,h3,h4,h5,h6{
    font-family:sans-serif;
    font-weight:500;
}
`

export const Container = styled.div`
padding:2rem;
`