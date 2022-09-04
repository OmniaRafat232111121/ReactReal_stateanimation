import React from 'react'
import styled from 'styled-components';
const Navbar = () => {
  return (
    <Nav>
    <div className='brand'>
    <div className='container'>
    <h1>ALLIR</h1>
    </div>
    <div className='toggle'></div>
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
justify-content: space-around;
align-items: center; 
 .brand{
    .container{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.2rem;
    font-weight: 900;
    text-transform: uppercase;

    }
    .toggle{
        display:none;
    }


ul{
    display:flex;
    gap:1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }

}
 }
`;

export default Navbar