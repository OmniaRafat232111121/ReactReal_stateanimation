import React from 'react'
import styled from 'styled-components/macro'
import {IoMdArrowRoundForward} from 
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

const HeroSlide=styled.div``;
const HeroSlider=styled.div``;
const HeroImage=styled.div``;
const HeroContent=styled.div``;
const Arrow=styled(IoMdArrowRoundForward)``;
const Button=styled.button`
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #000;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    padding:20px;
    &:hover {
      background-color: #0235e0;
    }`;
const Hero = ({slides}) => {
  return (
   <HeroSection>
   <HeroWrapper>
   {slides.map((slide,index)=>{
    return(
       <HeroSlide key={index}>
          <HeroSlider>
          <HeroImage/>
          <HeroContent>
          <h1>{slide.title}</h1>
          <p>{slide.price}</p>
          <Button to={slide.path}>{slide.label}
          <Arrow/>
          </Button>
          
          </HeroContent>
          </HeroSlider>
       </HeroSlide>
    );
   })}
   </HeroWrapper>
   </HeroSection>
  )
}

export default Hero