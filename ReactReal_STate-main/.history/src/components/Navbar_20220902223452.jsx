import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { Menudata } from '../Data/MenuData';
const Nav=styled.nav`
height:60px;
background: red;
`;
const Logo=styled(Link)`
color:#fff;
`;
const NavMenuLinks=styl
const Navbar = () => {
  return (
   <Nav>
   <Logo to="/">ELIXR</Logo>
   <AiOutlineMenu/>
   <NavMenu>
{Menudata.map((item,index)=>{
    <NavMenuLinks>
    </NavMenuLinks>
})}
   </NavMenu>
   </Nav>
  )
}

export default Navbar