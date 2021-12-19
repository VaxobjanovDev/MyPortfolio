import styled from "styled-components";
import { darkTheme } from "../../../styles/Theme.styled";

export const Lines = styled.div`
	margin:0 auto;
	width:2px;
	height:8rem;
	background-color:${props=>props.color==='darkTheme'?darkTheme.text:darkTheme.body};
`
