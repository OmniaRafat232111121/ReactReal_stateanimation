import React from 'react'
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
    <div className='brand'>
    <div className='container'>
    <h1>ALLIR</h1>
    </div>
    <div className='toggle'>
    </div>
    </div>
    <ul>
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#services">About</a>
    </li>
    <li>
      <a href="#recommend">Places</a>
    </li>
    <li>
      <a href="#testimonials">Testimonials</a>
    </li>
  </ul>
  <button>Connect</button>
    </Nav>
  )
}
const Nav=styled.nav`
display: flex;
justify-content: space-between;
align-items: center; 

`;

export default Navbar