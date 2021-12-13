import styled from 'styled-components'

export const Button = styled.button`
	background-color:#125364;
	color:${({color})=>color};
	width:${({w})=>w};
	border:none;
	&:hover{
		background-color:#fff;
		color:#000000;
		cursor:pointer;
		
	}
`