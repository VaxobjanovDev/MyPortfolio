import styled, { keyframes } from 'styled-components'
import React, { useRef, useState } from 'react'

import Music from '../assets/audio/audio.mp3'


const Box = styled.div`
	display:flex;
	cursor:pointer;
	position:fixed;
	top:3rem;
	left:22rem;
	z-index:5;

	&>*:nth-child(1){
		animation-delay:0.1s;
	}
	&>*:nth-child(2){
		animation-delay:0.2s;
	}
	&>*:nth-child(3){
		animation-delay:0.3s;
	}
	&>*:nth-child(4){
		animation-delay:0.4s;
	}
	&>*:nth-child(5){
		animation-delay:0.5s;
	}
`
const Play = keyframes`
	0%{
		transform:scaleY(1);
	}
	50%{
		transform:scaleY(2);
	}
	100%{
		transform:scaleY(1);
	}
`
const Line = styled.span`
	background:${props=>props.theme.text};
	border:1px solid ${props=>props.theme.body};

	animation:${Play} ease 1s infinite;
	animation-play-state:${props=>props.click? 'running':"paused"};
	height:1rem;
	width:2px;
	margin:0 0.1rem;
`


const Sound = () => {
	
		const ref = useRef(null)
		const [click, setClick] = useState(false)

		const handleClick = ()=>{
			setClick(!click)

			if(!click){
				ref.current.play()
			}else{
				ref.current.pause()
			}
		}
		
    return (
        <Box onClick={()=>handleClick()}>
					<Line click={click}/>
					<Line click={click}/>
					<Line click={click}/>
					<Line click={click}/>
					<Line click={click}/>
            <audio src={Music} ref={ref} loop />
        </Box>
    )
}

export default Sound
