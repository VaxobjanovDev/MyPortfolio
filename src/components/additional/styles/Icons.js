import styled from "styled-components";

export const Icons = styled.div`
  diplay:flex!important;
	flex-direction:column;
	align-items:center;

	position:fixed;
	bottom:0rem;
	left:2rem;

	z-index:3;
	
	&>*:not(:last-child){
		margin:0.8rem 0;
	}
`