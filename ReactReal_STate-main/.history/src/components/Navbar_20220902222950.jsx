import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import 
const Nav=styled.nav`
height:60px;
background: red;
`;
const Navbar = () => {
  return (
   <Nav>
   <Logo to="/">ELIXR</Logo>
   <AiOutlineMenu/>
   <NavMenu>

   </NavMenu>
   </Nav>
  )
}

export default Navbar