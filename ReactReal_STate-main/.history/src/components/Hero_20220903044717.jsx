import React from 'react'
 import styled,{css} from 'styled-components/macro';
import {IoArrowForward,IoArrowBack} from'react-icons/io5';
 import {IoMdArrowRoundForward} from 'react-icons/io'
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

const HeroSlide=styled.div`
z-index:1;
width:100%;
height:100%;
`;
const HeroSlider=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
`;
const HeroImage=styled.img`
/*  */


import React from "react";
import styled from "styled-components";
import homeImage from "../assets/imgTwo.jpg";
export default function Hero() {
  return (
    <HeroSection>
       <HeroWrapper>
       {slides.map((slide,index)=>{
        return(
           <HeroSlide key={index}>
              <HeroSlider>
              <HeroImage src={slide.image} alt={slide.title}/>
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
       <SliderButtons>
       <PrevArrow/>
       <NextArrow/>
       </SliderButtons>
       </HeroWrapper>
       </HeroSection>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  .background {
    height: 100%;
    object-fit:cover;
    img {
      width: 100%;
      filter: brightness(50%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
     
    }
  }
`;