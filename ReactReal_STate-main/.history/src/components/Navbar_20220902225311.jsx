import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { Menudata } from '../Data/MenuData';
import styled from 'styled-components';
const Nav=styled.nav`
height:60px;
background: red;
`;
const Logo=styled(Link)`
color:#fff;
`;
 const NavMenu=styled.div ``;
 const NavMenuLinks=styed.nav
`;
const Navbar = () => {
  return (
   <Nav>
   <Link to="/"><Logo/></Link>
   <AiOutlineMenu/>
   <NavMenu>
   {Menudata.map((item,index)=>{
    <NavMenuLinks  key={index}>
    {item.title}
    </NavMenuLinks>
})}
   </NavMenu>
   </Nav>
  )
}

export default Navbar