import React from 'react'
import styled,{css} from 'styled-components/macro'
const HeroSection=styled.section `
height:100vh;
max-height:1100vh;
position:relative;
overflow:hidden;

`;
const HeroWrapper=styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items: center;
position:relative;

`;
const Hero = () => {
  return (
   <HeroSection>
   <HeroErapper>
   </HeroErapper>
   </HeroSection>
  )
}

export default Hero