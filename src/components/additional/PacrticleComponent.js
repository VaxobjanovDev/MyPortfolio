import styled from 'styled-components'
import React from 'react'
import Particles from 'react-particles-js'

import darkMode from '../config/particle.json'
import lightMode from '../config/light-particle.json'
const Box = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    z-index:1;
`

const PacrticleComponent = (props) => {
    return (
        <Box>
            <Particles params={props.theme ==='lightTheme'?lightMode:darkMode}/>
        </Box>
    )
}

export default PacrticleComponent
