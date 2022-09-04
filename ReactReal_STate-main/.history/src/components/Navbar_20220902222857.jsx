import React from 'react'
import {AiOutlineMenu} from 'r'
const Nav=styled.nav`
height:60px;
background: red;
`;
const Navbar = () => {
  return (
   <Nav>
   <Logo to="/">ELIXR</Logo>

   </Nav>
  )
}

export default Navbar